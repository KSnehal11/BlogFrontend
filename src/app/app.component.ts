import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PostListComponentComponent } from './components/post-list-component/post-list-component.component';
import { AddPostComponentComponent } from './components/add-post-component/add-post-component.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,PostListComponentComponent , AddPostComponentComponent,FormsModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

    constructor(private _authServ :AuthenticationService){}

    loginFn(){
      this._authServ.login();
    }

    logoutFn(){
      this._authServ.logout();
    }
}
