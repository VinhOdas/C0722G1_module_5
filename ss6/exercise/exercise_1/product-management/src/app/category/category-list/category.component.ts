import { Component, OnInit } from '@angular/core';
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryListComponent implements OnInit {
  categorys: Category[] = []
  constructor(private categoryService: CategoryService) {
      this.categoryService.getAll().subscribe(data => {
        // @ts-ignore
          this.categorys = data;
      },
        error => {

        },
        () => {

        })

  }

  ngOnInit(): void {
  }

}
