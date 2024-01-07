import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel, ReactiveFormsModule } from '@angular/forms';
import { validateHeaderName } from 'http';
import { Card } from '../../model/card';
import { PostlistService } from '../../services/postlist.service';


@Component({
  selector: 'app-add-post-component',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './add-post-component.component.html',
  styleUrl: './add-post-component.component.css'
})
export class AddPostComponentComponent {

  @ViewChild("myPost") form: NgForm
  constructor(private serv: PostlistService) { }

  card: any;
  image = "assets/image/dashImg.jpg"
  onSubmit() {
    this.serv.postlist.push({ img: this.form.value.image, author: this.form.value.author, title: this.form.value.title, desp: this.form.value.desp })
    console.log(this.form.value.title)
    console.log(this.form.value.desp)
  }



}
