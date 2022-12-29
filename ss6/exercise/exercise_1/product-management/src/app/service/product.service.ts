import { Injectable } from '@angular/core';
import {Product} from "../model/product";
import {element} from "protractor";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _products: Product[] = [{
    id: 1,
    name: 'IPhone 12',
    price: 2400000,
    description: 2
  }, {
    id: 2,
    name: 'IPhone 11',
    price: 1560000,
    description: 2
  }, {
    id: 3,
    name: 'IPhone X',
    price: 968000,
    description: 2
  }, {
    id: 4,
    name: 'IPhone 8',
    price: 7540000,
    description: 2
  }, {
    id: 5,
    name: 'IPhone 11 Pro',
    price: 1895000,
    description: 2
  }

  ];
  constructor() {

  }

  getAll() {
      return this._products;
  }

  saveEditProduct(product: any) {
    for (let i = 0; i <this._products.length ; i++) {
      if (product.id==this._products[i].id){
        this._products[i].name= product.name;
        this._products[i].price = product.price;
        this._products[i].description = product.description;
        break;
      }
    }
  }

  findById(number: number):Product| null {
    let temp = this._products.filter(element => element.id === number)
    if (temp.length == 0){
        return null
    }
    return temp[0] ;
  }

  saveCreateProduct(product: any) {
    this._products.push(product)

  }
}
