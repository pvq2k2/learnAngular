import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  status: boolean = false;
  productList: { id: string; name: string, price: number, status: boolean; description: string}[] = [
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
  onHandlerClick() {
    console.log("clicked!");
    
    this.status = !this.status
  }
}
