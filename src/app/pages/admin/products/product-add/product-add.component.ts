import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product: IProduct = {
    id: 0,
    name: '',
    price: 0,
    description: ''
  };
  constructor(
    private productService: ProductService,
    private routes: Router
  ) {}

  ngOnInit() {
    // this.onAddProduct();
  }
  onAddProduct() {

    console.log('this.product', this.product);
    
    this.productService.addProduct(this.product).subscribe(() => {
      this.routes.navigate(['admin/product']);
    });
    // if (this.product) {
    //   alert('Product added successfully');
    //   this.routes.navigate(['admin/product']);
    // } 
  }

}
