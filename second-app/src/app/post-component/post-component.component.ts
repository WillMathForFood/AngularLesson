import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInputError } from '../common/bad-input-error';

@Component({
  selector: 'post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})

export class PostComponentComponent implements OnInit {
  posts: any[];
  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(
        response => {
          this.posts = response as any[];
        }, 
        error => {
          alert('An unexpected error occurred.');
          console.log(error);
        });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';
    this.service.createPost(post)
      .subscribe(
        response => {
          post['id'] = response['id'];
          this.posts.splice(0, 0, post);
        }, 
        (error: AppError) => {
          if(error instanceof BadInputError) {
            // this.form.setErrors(error.originalError);
          }
          else {
            alert('An unexpected error occurred.');
            console.log(error);
          }
        });
  }

  updatePost(post) {
    this.service.updatePost(post.id)
      .subscribe(
        response => {
          console.log(response)
        }, 
        (error: AppError) => {
          if(error instanceof NotFoundError)
            alert('This post has been deleted');
          else {
            alert('An unexpected error occurred.');
            console.log(error);
          }
        });
  }

  deletePost(post) {
    this.service.deletePost(post.id)
      .subscribe(
        response => {
          console.log(response);
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        }, 
        (error: AppError) => {
          console.log(error);
          if(error instanceof NotFoundError)
            alert('This post has already been deleted');
          else {
            alert('An unexpected error occurred.');
            console.log(error);
          }
        });
  }
}
