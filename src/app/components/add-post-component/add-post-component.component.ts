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
import { randomUUID } from 'crypto';
import { GetpostService } from '../../services/getpost.service';

@Component({
  selector: 'app-add-post-component',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './add-post-component.component.html',
  styleUrl: './add-post-component.component.css',
})
export class AddPostComponentComponent {
  @ViewChild('myPost') form: NgForm;
  constructor(private serv: PostlistService , private router:Router , private blogServ : GetpostService) {}

  image = 'assets/image/dashImg.jpg';
  onSubmit() {
    // const randomId = uuidv4();
    // this.serv.postlist.push({
      
    //   id:randomId,
    //   img: this.form.value.image,
    //   author: this.form.value.author,
    //   title: this.form.value.title,
    //   desp: this.form.value.desp,
    // });

    const userId = this.generateId(); // Use the generated ID as userId
    const postData = {
      id: userId, // Use the same generated ID as userId
      img: this.form.value.image,
      author: this.form.value.author,
      title: this.form.value.title,
      desp: this.form.value.desp,
    };
   
    
    this.blogServ.addPost(userId, postData).subscribe(
      (response) => {
        // Handle successful response if needed
        console.log('Post added successfully:', response);
        this.router.navigate(['/blog']); // Redirect to blog page
      },
      (error) => {
        // Handle error if needed
        console.error('Error adding post:', error);
      }
    );
    // this.router.navigate(['/blog'])
  }

  generateId(): any {
    // Generate unique ID using UUID
    const randomId : any = uuidv4()
    return randomId;
  }
}
