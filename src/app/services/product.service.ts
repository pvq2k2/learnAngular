import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { IProduct } from '../models/Product';

const apiUrl = 'http://localhost:3001/products';

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    constructor ( private http: HttpClient) {}

    getAllProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(apiUrl);
    }

    getProduct(id: number | string): Observable<IProduct> {
        return this.http.get<IProduct>(`${apiUrl}/${id}`);
    }
    addProduct(product: IProduct): Observable<IProduct> {
        return this.http.post<IProduct>(apiUrl, product);
    }

    updateProduct(product: IProduct): Observable<IProduct> {
        return this.http.put<IProduct>(`${apiUrl}/${product.id}`, product);
    }
    removeProduct(id: number | string): Observable<IProduct> {
        return this.http.delete<IProduct>(`${apiUrl}/${id}`);
    }
}