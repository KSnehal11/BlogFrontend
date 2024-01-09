import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import {
  FormsModule,
  NgForm,
  NgModel,
  ReactiveFormsModule,
} from '@angular/forms';
import { validateHeaderName } from 'http';
import { Card } from '../../model/card';
import { v4 as uuidv4 } from 'uuid';

import { PostlistService } from '../../services/postlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post-component',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './add-post-component.component.html',
  styleUrl: './add-post-component.component.css',
})
export class AddPostComponentComponent {
  @ViewChild('myPost') form: NgForm;
  constructor(private serv: PostlistService , private router:Router) {}

  card: any;
  image = 'assets/image/dashImg.jpg';
  onSubmit() {
    const randomId = uuidv4();
    this.serv.postlist.push({
      id:randomId,
      img: this.form.value.image,
      author: this.form.value.author,
      title: this.form.value.title,
      desp: this.form.value.desp,
    });
   
    this.router.navigate(['/blog'])
  }
}
