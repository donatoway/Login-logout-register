import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environment';
import { User } from '../componenti/modelli/modelli.component';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  ApiKey = environments.FireBaseApiKey
  SignUpUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.ApiKey}`;
  isLoggedIn = false;
  SignInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.ApiKey}`;
  user: User;


  constructor(private httpClient: HttpClient) { }

  register(email: string, password:string)
  {
    return this.httpClient.post( this.SignUpUrl, {email, password, returnSecureToken:true})
  }

  SignIn(email:string, password:string)
  {
    this.isLoggedIn = true;
    return this.httpClient.post(this.SignInUrl, {email, password, returnSecureToken:true})
  }

  logout()
  {
    this.isLoggedIn = false;
    this.user = null;
    localStorage.removeItem('user');

    console.log(this.user)
  }

  createUser( email: string,
              id:string,
              _token: string,
              _expirationDate: Date)
  {
      this.isLoggedIn = true;
      this.user = new User(email, id, _token, _expirationDate)
      return
  }
}
