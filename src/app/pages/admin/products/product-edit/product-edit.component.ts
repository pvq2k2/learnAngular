import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: IProduct = {
    id: 0,
    name: '',
    price: 0,
    description: ''
  };
  id!: number | string;
  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService,
    private routes: Router
  ) {}

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.productService.getProduct(this.id).subscribe((response) => {
      this.product = response;
      console.log(this.product);
    })
    
  }
  onEditProduct() {
    this.productService.updateProduct(this.product).subscribe(() => {
      // this.routes.navigate(['admin/product']);
      console.log(this.product);
      
    })
  }

}
