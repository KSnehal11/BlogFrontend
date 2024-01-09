import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { AddPostComponentComponent } from './components/add-post-component/add-post-component.component';
import { LoginComponent } from './components/login/login.component';
import { PostListComponentComponent } from './components/post-list-component/post-list-component.component';
import { RegisterComponent } from './components/register/register.component';
import { PostDetailComponentComponent } from './components/post-detail-component/post-detail-component.component';
import { CommentComponentComponent } from './components/comment-component/comment-component.component';

export const routes: Routes = [
    { path: '', component: PostListComponentComponent },
    { path: 'blog', component: PostListComponentComponent },
    {path:'blog/myblog/:id', component:PostDetailComponentComponent},
    {path:'blog/addcomment' , component:CommentComponentComponent, canActivate:[authGuard]},
    { path: 'addPost', component: AddPostComponentComponent , canActivate:[authGuard]},
    {
        path: 'login', component: LoginComponent,
        children: []
    },
    { path: 'register', component: RegisterComponent }

];
