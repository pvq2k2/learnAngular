import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
  statusShowDetail: boolean = false;
  products!: IProduct[];
  productDetail!: IProduct;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.onGetAllProducts();
  }

  onGetAllProducts() {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    })
  }
  onGetProduct(id: number | string) {
    this.statusShowDetail = true;
    this.productService.getProduct(id).subscribe((data) => {
      this.productDetail = data;
    })
  }
  onRemoveProduct(id: number | string) {
    const confirm = window.confirm("Are you sure you want to delete this item?");
    if (confirm) {
      this.productService.removeProduct(id).subscribe(() => {
          this.products.filter(item => item.id !== id);
      })
    }
  }
}
