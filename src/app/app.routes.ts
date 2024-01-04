import { Routes } from '@angular/router';
import { AddPostComponentComponent } from './components/add-post-component/add-post-component.component';
import { PostListComponentComponent } from './components/post-list-component/post-list-component.component';

export const routes: Routes = [
    {path:'blog' , component:PostListComponentComponent},
    {path:'addPost', component:AddPostComponentComponent}
];
