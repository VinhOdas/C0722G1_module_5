import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";
import {Router} from "@angular/router";


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
      category: new FormControl()
    }
  )
  categorys: Category[] = [];
  productCreate: Product[] = [];
  mess:string = '';
  constructor(private productService: ProductService,
              private categoryService:CategoryService, private router: Router) {

  }

  ngOnInit(): void {
    this.productService.findAllCategory().subscribe(data =>{
        this.categorys = data;
    })
  }

  submit() {
    const productAdd = this.formReactive.value;
    console.log(productAdd);
    this.productService.saveCreateProduct(productAdd).subscribe(data=>{
      this.router.navigateByUrl("/product/list");
      this.mess = "thêm mới thành công"
    })
  }
}
