import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { PostlistService } from '../../services/postlist.service';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user.service';
import { GetpostService } from '../../services/getpost.service';
import { response } from 'express';

@Component({
  selector: 'app-post-list-component',
  standalone: true,
  imports: [CommonModule , RouterOutlet , RouterModule],
  templateUrl: './post-list-component.component.html',
  styleUrl: './post-list-component.component.css'
})
export class PostListComponentComponent implements OnInit {

  constructor(private serv : PostlistService){}
  private userTokenObj :UserService = inject(UserService)
  private objList : GetpostService = inject(GetpostService)

  private token = this.userTokenObj.token;


  image = "assets/image/dashImg.jpg"
  postList : any[] =[]

  ngOnInit(): void {
    console.log("hello")
    this.getPostList();
    
    // this.postList = this.serv.postlist
  }
  
  getPostList(){
    this.objList.getAllBlogs().subscribe((response :any[])=>{
      
      this.postList = response
      this.serv.updatePostList(this.postList);
    })
  }
}
