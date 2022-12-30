import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";
import {ActivatedRoute, Router} from "@angular/router";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productEdit: Product|undefined|null;
  categoryList: Category[] = [];
  formEdit: FormGroup = new FormGroup(
    {
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      category: new FormControl()
    }
  );
  constructor(private productService: ProductService,
              private categoryService: CategoryService
              , private  activeRoute: ActivatedRoute,
                private router: Router) {
    this.activeRoute.paramMap.subscribe(data => {
      const  id = data.get("id");
      if (id != null){
        this.productService.findById(parseInt(id)).subscribe(data=>{
          this.productEdit = data;
          this.formEdit.patchValue(this.productEdit);
        });

      }
    })

  }

  ngOnInit(): void {
    this.productService.findAllCategory().subscribe(data => {
      this.categoryList = data;
    });
  }

  submit() {
    const product = this.formEdit.value;
    this.productService.saveEditProduct(product).subscribe(data =>{
      alert('Cập nhật thành công');
    });
  }

  same(idOne: Category, idTwo: Category) {
      return idOne.id = idTwo.id;
  }
}
