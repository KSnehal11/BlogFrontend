import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  loggenIn : boolean =false;

  public login (){
      this.loggenIn=true;
  }

  public logout(){
    this.loggenIn=false;
  }

  public isAuthenticate(){
    return this.loggenIn;
  }
}
