import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private userServ: UserService) { }

  // @ViewChild("myform") form  : NgForm;

  private flag: boolean = false;

  onSubmit(val) {
    const firstname = val.fname;
    const lastname = val.lname;
    const email = val.email;
    const password = val.password;
    const cpasswd = val.cpassword;

    if (password != cpasswd) {
      this.flag = true;
    }
    else {
      this.userServ.register(
        { firstname: firstname,
          lastname :lastname, 
          email:email, 
          password:password }).subscribe(() => { console.log("user added") })
    }
  }




}
