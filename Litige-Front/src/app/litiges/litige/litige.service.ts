import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable()
export class LitigeService {

  constructor(private http: HttpClient) { }

  public getLitige(id: number): Observable<Object> {
    console.log('Call litige');
    return this.http.get('http://localhost:8080/api/litige/',
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        responseType: 'text'
      });
  }


}
