import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PostlistService } from '../../services/postlist.service';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-post-list-component',
  standalone: true,
  imports: [CommonModule , RouterOutlet , RouterModule],
  templateUrl: './post-list-component.component.html',
  styleUrl: './post-list-component.component.css'
})
export class PostListComponentComponent implements OnInit {

  constructor(private serv : PostlistService){}

  image = "assets/image/dashImg.jpg"
  postList : any[] =[]

  ngOnInit(): void {
    console.log("hello")
    this.postList = this.serv.postlist
  }
  
}
