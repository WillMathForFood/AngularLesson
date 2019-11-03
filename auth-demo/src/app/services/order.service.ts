import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class OrderService {

  constructor(private http: AuthHttp) {
  }

  getOrders() {
    return this.http.get('/api/orders')
      .map(response => {
        console.log(response.json());
        return response.json();
      });
  }
}
