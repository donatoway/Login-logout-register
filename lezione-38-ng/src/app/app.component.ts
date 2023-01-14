import { AfterViewInit, Component, createComponent, ElementRef, OnInit, ViewChild } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private authService: AuthService){}

  ngOnInit(): void {

    if (localStorage.getItem('user'))
    {
        const user = JSON.parse(localStorage.getItem('user'))
        this.authService.createUser(user.email, user.id, user._token, user._expirationDate)
        console.log(this.authService.user)
    }
  }
  title = 'lezione-38-ng';

}
