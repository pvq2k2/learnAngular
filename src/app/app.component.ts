import { Component } from '@angular/core';
import { IProduct } from './models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  productList: IProduct[] = [
    { 
      id: '1',
      name: 'Product A',
      price: 100,
      status: true,
      description: 'Product A description'
    },
    { 
      id: '2',
      name: 'Product B',
      price: 200,
      status: false,
      description: 'Product B description'
    },
    { 
      id: '3',
      name: 'Product C',
      price: 300,
      status: true,
      description: 'Product C description'
    },
    { 
      id: '4',
      name: 'Product D',
      price: 400,
      status: false,
      description: 'Product D description'
    },
  ]
}
