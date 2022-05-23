import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/Product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product!: IProduct;
  constructor() { }

  ngOnInit(): void {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      description: ''
    }
  }

  onSubmit() {

  }
}
