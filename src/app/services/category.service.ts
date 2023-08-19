import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryUri: string;

  constructor(private http: HttpClient) {
    this.categoryUri = environment.urlApi + environment.basePath + '/category';
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoryUri);
  }
}
