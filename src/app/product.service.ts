import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private pdt: HttpClient) { }

  readProduct(){
    return this.pdt.get("http://localhost:4200/assets/product.json")
   }
}
