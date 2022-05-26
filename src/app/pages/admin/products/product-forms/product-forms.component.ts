import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-forms',
  templateUrl: './product-forms.component.html',
  styleUrls: ['./product-forms.component.css']
})
export class ProductFormsComponent implements OnInit {
  product: IProduct = {
    name: '',
    price: 0,
    description: ''
  };
  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService,
    private routes: Router ) { }

  ngOnInit(): void {
    const id = +this.activateRoute.snapshot.paramMap.get('id')!;
    if (id) {
      this.productService.getProduct(id).subscribe(data => {
        this.product = data
      })
    }
  }
  onSubmitProduct() {
    const id = +this.activateRoute.snapshot.paramMap.get('id')!;
    if (id) {
      this.productService.updateProduct(this.product).subscribe(() => {
        setTimeout(() => {
          this.routes.navigate(['admin/product']);
        }, 2000)
      })
    }
    this.productService.addProduct(this.product).subscribe(() => {
      setTimeout(() => {
        this.routes.navigate(['admin/product']);
      }, 2000)
    });

  }

}
