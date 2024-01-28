import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router ,RouterModule, RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private userServ: UserService , private router: Router) { }

  // @ViewChild("myform") form  : NgForm;

  private flag: boolean = false;
  showAlert : boolean = false;

  onSubmit(val) {
    const username = val.username
    const email = val.email;
    const password = val.password;
    const cpasswd = val.cpassword;

    if (password != cpasswd) {
      this.flag = true;
    }
    else {
      this.userServ.register(
        {
          username: username,
          password: password,
          email: email
        }).subscribe((val) => { 
          this.showAlert = true;
          this.router.navigate(['login']);

        })
    }
  }




}
