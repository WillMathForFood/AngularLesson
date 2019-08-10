import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppError } from '../common/app-error'
import { NotFoundError } from '../common/not-found-error';
import { BadInputError } from '../common/bad-input-error';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post))
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if(error.status === 400)
            return throwError(new BadInputError(error));

          return throwError(new AppError(error));
      }));
  }

  updatePost(id: string) {
    return this.http.patch(this.url + '/' + id, JSON.stringify({ isRead: true }));
  }

  deletePost(id: string) {
    console.log(id);
    return this.http.delete(this.url + '/' + id, { observe: "response" })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if(error.status === 404)
            return throwError(new NotFoundError());

          return throwError(new AppError(error));
      }));
  }
}
