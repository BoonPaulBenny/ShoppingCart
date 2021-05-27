import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productList: any = []

  rupee: any = faRupeeSign

  constructor(private pservice: ProductService) { }

  ngOnInit(): void {
    this.pservice.readProduct().subscribe((data) => {
      this.productList = data
    })
  }

}
