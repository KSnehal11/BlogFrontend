import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { AddPostComponentComponent } from './components/add-post-component/add-post-component.component';
import { LoginComponent } from './components/login/login.component';
import { PostListComponentComponent } from './components/post-list-component/post-list-component.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    { path: '', component: PostListComponentComponent },
    { path: 'blog', component: PostListComponentComponent },
    { path: 'addPost', component: AddPostComponentComponent , canActivate:[authGuard]},
    {
        path: 'login', component: LoginComponent,
        children: []
    },
    { path: 'register', component: RegisterComponent }

];
