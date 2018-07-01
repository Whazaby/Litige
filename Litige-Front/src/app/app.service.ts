import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AppService {

  authenticated = false;

  constructor(private http: HttpClient) {
  }

  authenticate(credentials, callback) {

    console.log('call authenticate');
    const headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get('http://localhost:8080/user', {headers: headers}).subscribe(response => {
      console.log('GET auth: ', response);
      if (response['name']) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
      return callback && callback();
    });

  }

}
