import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostlistService {

  constructor() { }

  postlist = [
    {
      id: 102,
      img: 'assets/image/card.jpg',
      title: 'Routing in Angular',
      author:'John L',
      desp: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nesciunt maiores amet fugiat fuga, ullam temporibus dicta adipisci ducimus soluta.',
    },
    {
      id:103,
      img: 'https://s3-ap-south-1.amazonaws.com/trt-blog-ghost/2020/03/angular-4-pragmatycznie-40-638.jpg',
      title: 'Routing in Angular',
      author:'John L',
      desp: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nesciunt maiores amet fugiat fuga, ullam temporibus dicta adipisci ducimus soluta.',
    },
    {
      id:104,
      img: 'https://s3-ap-south-1.amazonaws.com/trt-blog-ghost/2020/03/angular-4-pragmatycznie-40-638.jpg',
      title: 'Routing in Angular',
      author:'John L',
      desp: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nesciunt maiores amet fugiat fuga, ullam temporibus dicta adipisci ducimus soluta.'
    },
    {
      id:105,
      img: 'https://s3-ap-south-1.amazonaws.com/trt-blog-ghost/2020/03/angular-4-pragmatycznie-40-638.jpg',
      title: 'Routing in Angular',
      author:'John L',
      desp: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nesciunt maiores amet fugiat fuga, ullam temporibus dicta adipisci ducimus soluta.'
    }

  ]
}
