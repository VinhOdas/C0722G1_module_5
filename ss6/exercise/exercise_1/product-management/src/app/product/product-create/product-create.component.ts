import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  formReactive: FormGroup = new FormGroup(
    {
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
    }
  )
  productCreate: Product[] = []
  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
  }

  submit() {
    const product = this.formReactive.value;
    this.productService.saveCreateProduct(product);
    this.formReactive.reset();
  }
}
