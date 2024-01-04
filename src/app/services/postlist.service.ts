import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostlistService {

  constructor() { }

  postlist = [
    {
      img: 'assets/image/card.jpg',
      title: 'Routing in Angular',
      desp: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nesciunt maiores amet fugiat fuga, ullam temporibus dicta adipisci ducimus soluta.',
    },
    {
      img: 'https://s3-ap-south-1.amazonaws.com/trt-blog-ghost/2020/03/angular-4-pragmatycznie-40-638.jpg',
      title: 'Routing in Angular',
      desp: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nesciunt maiores amet fugiat fuga, ullam temporibus dicta adipisci ducimus soluta.',
    },
    {
      img: 'https://s3-ap-south-1.amazonaws.com/trt-blog-ghost/2020/03/angular-4-pragmatycznie-40-638.jpg',
      title: 'Routing in Angular',
      desp: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nesciunt maiores amet fugiat fuga, ullam temporibus dicta adipisci ducimus soluta.'
    },
    {
      img: 'https://s3-ap-south-1.amazonaws.com/trt-blog-ghost/2020/03/angular-4-pragmatycznie-40-638.jpg',
      title: 'Routing in Angular',
      desp: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nesciunt maiores amet fugiat fuga, ullam temporibus dicta adipisci ducimus soluta.'
    }

  ]
}
