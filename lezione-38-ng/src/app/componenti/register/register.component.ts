import { Component } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  template:`<div [innerHtml]="tooltip('Hello World') | safeHtml">
  </div>`,
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  UserExist:string = "";
  constructor(private authService : AuthService, private router: Router){}
  onSubmit(form: NgForm)
  {
    const email = form.value.email;
    const password = form.value.password;

    this.authService.register(email, password).subscribe((data:any) =>{
      console.log(data);

      if (!data.status)
      {
        this.router.navigate(['/login']);
      }
    })
    this.UserExist = "User alredy exist or incorrect email";
  }

}
