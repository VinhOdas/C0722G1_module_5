import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  // @ts-ignore
  productEdit: Product | null = [];
  formEdit: FormGroup = new FormGroup(
    {
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
    }


  );

  constructor(private productService: ProductService, private  activeRoute: ActivatedRoute) {
    this.activeRoute.paramMap.subscribe(data => {
      const  id = data.get("id");
      if (id != null){
        this.productEdit = this.productService.findById(parseInt(id));
        // @ts-ignore
        this.formEdit.patchValue(this.productEdit)
      }
    })

  }

  ngOnInit(): void {
  }

  submit() {
    const product = this.formEdit.value;
    this.productService.saveEditProduct(product);
  }
}
