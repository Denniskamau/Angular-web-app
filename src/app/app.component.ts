import { Component } from '@angular/core';
import {NotificationService} from './notification.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'push-notification-demo';
  constructor(private notificationService: NotificationService){}
  
  triggerNotification(){
    console.log('clicked')
    this.notificationService.sendNotification().subscribe(data =>{
      console.log('data',JSON.stringify(data))
    })
    
  }
}
