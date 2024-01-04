import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-detail-component',
  standalone: true,
  imports: [],
  templateUrl: './post-detail-component.component.html',
  styleUrl: './post-detail-component.component.css'
})
export class PostDetailComponentComponent {

  @Input() postDetails : any ;

}
