import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  HTTP_LINK_CATEGORY = "http://localhost:3000/category";

  constructor(private httpClient: HttpClient) {

  }

  getAll(): Observable<Category> {
    return this.httpClient.get(this.HTTP_LINK_CATEGORY);
  }
}
