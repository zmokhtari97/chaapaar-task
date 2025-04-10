import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { RegisterFormResult } from './result.constant';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private httpClient: HttpClient) {}

  getRegisterForm(): Observable<any> {
    //Due to CORS error
    // return this.httpClient.get('https://accounts.mail.ir/app/sign-up');
    return of(RegisterFormResult).pipe(delay(1000));
  }
}
