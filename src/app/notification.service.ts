import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient){}

  sendNotification(){
    let url = 'https://fcm.googleapis.com/fcm/send'
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "AAAAIvkKBHQ:APA91bG4EqMU4I2P9erGPO_rOKEeuj2Jpr-e3RH-EIRnEfZxHt8G0NjnxHhSfrqsZOp1QJXw6gJKkytgn63Y4Bz-Otdk37YDYgNIfoFVEoNk3eyzues1HFhzKvyYB3bDyjUiVlujWHVP" });
    let options = { headers: headers };
    let data = {
      "notification": {
        "title": "My title",
        "text": "My text",
        "sound": "default"
      },
      "priority": "High",
      "to": "ed8LjxIBtXE:APA91bFNyDtUVNu9hbqwr27J6lzx_6JrXmQLL1nYkyH0Z9ObnmGQ_H46GwS-jTHfIp_Rc6Fch_qzAR5vA41lpJcqQOW7_sBxDh11-7HTSDS9_Fa0M6S5l69z8RBNod53kZZaYyoLT_8p"
    }
    console.log('sending')
    return this.http.post(url,JSON.stringify(data),options)
  }
}
