import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/Product';

@Component({
  selector: 'app-productmanager',
  templateUrl: './productmanager.component.html',
  styleUrls: ['./productmanager.component.css']
})
export class ProductmanagerComponent {
  @Input() data!: IProduct[]
  title: string = 'Product Name'
  status: boolean = false;

  onHandlerClick() {
    console.log("clicked!");
    
    this.status = !this.status
  }
  onHandlerRemove(id: string) {
    this.data = this.data.filter(p => p.id != id);
  }
  onHandlerKeyPress(e: any) {
    this.title = e.target.value;
  }

}
