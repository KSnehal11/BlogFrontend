import { CommonModule } from '@angular/common';
import { Component, EventEmitter , OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddcommentService } from '../../services/addcomment.service';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment-component',
  standalone: true,
  imports: [CommonModule , FormsModule ,ReactiveFormsModule],
  templateUrl: './comment-component.component.html',
  styleUrl: './comment-component.component.css'
})
export class CommentComponentComponent implements OnInit {

  @Output() addCommentClicked = new EventEmitter();

  commentForm: FormGroup;
  comments: { author: string; text: string }[] = [];
  showCommentForm = false;

  constructor(private fb: FormBuilder , private commentService : AddcommentService) {
    this.commentForm = this.fb.group({
      author: ['', Validators.required],
      commentText: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadComments()
  }

  loadComments() {
    this.commentService.getAllComments().subscribe(
      (response: any[]) => {
        this.comments = response;
      },
      error => {
        console.error('Error fetching comments:', error);
      }
    );
  }
  
  addComment() {
    const author = this.commentForm.get('author').value;
    const commentText = this.commentForm.get('commentText').value;

    if (author && commentText) {
      const comment = { author, text: commentText };
      this.commentService.addComment(comment).subscribe(
        (response) => {
          this.comments.unshift(response); // Add the new comment to the beginning of the array
          this.addCommentClicked.emit(); // Emit an event to notify parent component
          this.commentForm.reset(); // Clear the form
          this.showCommentForm = false; // Hide the comment form
        },
        error => {
          console.error('Error adding comment:', error);
        }
      );
    }
  }
}
