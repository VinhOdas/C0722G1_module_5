import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  idDelete: number|undefined;
  nameDelete: string|undefined;
  modalDeleteForm: FormGroup = new FormGroup(
    {
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
    }
  )
  products: Product[] = []
  constructor(private productService: ProductService) {
    this.products = this.productService.getAll();

  }

  ngOnInit(): void {
  }


  saveDelete() {
    for (let i = 0; i <this.products.length ; i++) {
      if(this.products[i].id==this.idDelete){
        // @ts-ignore
        this.products.splice(i,1);
        break;
      }
    }
  }


  infoDelete(id: number, name: string) {
    this.idDelete=id;
    this.nameDelete = name;
  }
}
