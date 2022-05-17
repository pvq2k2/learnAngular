import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { IProduct } from '../models/Product';

const apiUrl = 'http://localhost:3001/products';

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    constructor ( private http: HttpClient) {}

    getAllProducts() {
        return this.http.get(apiUrl);
    }

    getProduct(id: number | string) {
        return this.http.get(`${apiUrl}/${id}`);
    }

    addProduct(product: IProduct) {
        return this.http.post(apiUrl, product);
    }

    updateProduct(product: IProduct) {
        return this.http.put(`${apiUrl}/${product.id}`, product);
    }

}