import { Injectable } from '@angular/core';
import {Product} from "../model/product";
import {element} from "protractor";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  HTTP_LINK_PRODUCT = "http://localhost:3000/product";
  HTTP_LINK_CATEGORY = "http://localhost:3000/category";
  private _products: Product[] = [

  ];
  constructor(private httpClient: HttpClient) {

  }

  getAll(): Observable<Product[]> {
      // @ts-ignore
    return this.httpClient.get(this.HTTP_LINK_PRODUCT);
  }

  saveEditProduct(product: any):Observable<Product> {
     return  this.httpClient.patch(this.HTTP_LINK_PRODUCT +'/'+product.id,product)

    // for (let i = 0; i <this._products.length ; i++) {
    //   if (product.id==this._products[i].id){
    //     this._products[i].name= product.name;
    //     this._products[i].price = product.price;
    //     this._products[i].description = product.description;
    //     break;
    //   }
    // }
  }

  findById(number: number):Observable<Product> {
    return this.httpClient.get<Product>(this.HTTP_LINK_PRODUCT+"/"+ number)
  }

  // @ts-ignore
  saveCreateProduct(product:Product):Observable<Product> {

    return this.httpClient.post(this.HTTP_LINK_PRODUCT,product)

  }

  // @ts-ignore
  findAllCategory():Observable<Category[]> {
    // @ts-ignore
    return this.httpClient.get(this.HTTP_LINK_CATEGORY);

  }
}
