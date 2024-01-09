import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule,RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private userServ : UserService){}

  onSubmit(val){
      const username =val.email ;
      const password = val.password;

      this.userServ.login(username,password).subscribe((data)=>{
        if(data.length)
          console.log("data is empty")
      
      })
  }

}
