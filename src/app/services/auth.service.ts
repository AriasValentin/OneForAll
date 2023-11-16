import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getAuthToken(): Observable<boolean>{
    if (sessionStorage.length == 0){
      return of(false);
    }
    else{
      return of(true);
    }
  }
}
