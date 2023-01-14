import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
let a = 1;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent
{
  constructor(private authService: AuthService, private router: Router){};

  onLogout()
  {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}


//COMPLETARE LA TABELLA ED E FINITO

