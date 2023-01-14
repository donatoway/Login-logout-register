import { Component } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router : Router){}

  onSubmit(form: NgForm)
  {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.SignIn(email, password).subscribe((data:any) =>
    {
      console.log(data);

      const expirationDate = new Date(new Date().getTime() +  data.expiresIn * 1000)
      this.authService.createUser(data.email, data.localId, data.idToken, data.expirationDate)
      localStorage.setItem('user', JSON.stringify(this.authService.user))

      this.router.navigate(['']);

    })
    form.reset();
  }
}
