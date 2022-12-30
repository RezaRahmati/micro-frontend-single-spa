import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  startSession(token: string) {
    sessionStorage.setItem('token', token);
  }

  stopSession() {
    sessionStorage.removeItem('token');
  }

  getToken() {
    return sessionStorage.getItem('token');
  }
}
