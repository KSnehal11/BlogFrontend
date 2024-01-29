import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { PostlistService } from '../../services/postlist.service';

@Component({
  selector: 'app-post-detail-component',
  standalone: true,
  imports: [RouterModule,RouterOutlet,CommonModule,],
  templateUrl: './post-detail-component.component.html',
  styleUrl: './post-detail-component.component.css'
})
export class PostDetailComponentComponent {

  constructor(private serv : PostlistService , private activeroute : ActivatedRoute ){}
  
  post: any;
  postId: any = 0;

  ngOnInit(): void {
    this.postId = this.activeroute.snapshot.params['id'];
    this.post = this.serv.postlist.find((x) => x.id == this.postId);
  }

  

}
