import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PostlistService } from '../../services/postlist.service';

@Component({
  selector: 'app-post-list-component',
  standalone: true,
  imports: [CommonModule],
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
