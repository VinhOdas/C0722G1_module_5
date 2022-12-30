import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // @ts-ignore
  idDelete: number|undefined;
  // @ts-ignore
  nameDelete: string|undefined;
  modalDeleteForm: FormGroup = new FormGroup(
    {
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      category: new FormControl()
    }
  )
  products: Product[] = []
  constructor(private productService: ProductService, private router: Router) {
    this.productService.getAll().subscribe(data => {
        console.log(data)
    this.products = data;
    },
        error => {

        },
        () => {

        });

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


  infoDelete(id: number|undefined, name: string|undefined) {
    this.idDelete=id;
    this.nameDelete = name;
  }
}
