import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
import { error } from 'console';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private userServ: UserService,
    private authServ: AuthenticationService,
    private router : Router
  ) {}

  onSubmit(val) {
    const username = val.username;
    const password = val.password;

    this.userServ.login(username, password).subscribe((data) => {
      // console.log("login data" + data)
      if (data.length > 0) {
        this.authServ.login();
        this.router.navigate(['blog'] , username)
        // console.log("token" + data);
      }
      else{
        alert("Invalid Data! ");
      }
    },
    (error) => {console.log("Error during login: " ,error)}

    );
  }
}
