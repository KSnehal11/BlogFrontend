import { CommonModule } from '@angular/common';
import { Component, EventEmitter , Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment-component',
  standalone: true,
  imports: [CommonModule , FormsModule ,ReactiveFormsModule],
  templateUrl: './comment-component.component.html',
  styleUrl: './comment-component.component.css'
})
export class CommentComponentComponent {

  @Output() addCommentClicked = new EventEmitter();

  commentForm: FormGroup;
  comments: { author: string; text: string }[] = [];
  showCommentForm = false;

  constructor(private fb: FormBuilder) {
    this.commentForm = this.fb.group({
      author: ['', Validators.required],
      commentText: ['', Validators.required],
    });
  }

  addComment() {
    const author = this.commentForm.get('author').value;
    const commentText = this.commentForm.get('commentText').value;

    this.comments.unshift({ author, text: commentText });

    // Clear the form after adding a comment
    this.addCommentClicked.emit();
    this.commentForm.reset();
    this.showCommentForm = false;
  }
}
