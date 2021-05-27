import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { CartItemsService } from 'src/app/cart-items.service';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  productList: any = []
  rupee: any = faRupeeSign
  theUrl = "home"

  constructor(private pservice: ProductService, private cart: CartItemsService, private router: Router) { }

  ngOnInit(): void {

    this.pservice.readProduct().subscribe((data) => {
      this.productList = data
    })

  }

  add(data: any) {
    //console.log(data.qnty)
    data.qnty += 1
  }

  reduce(data: any) {
    //console.log(data.qnty)
    if (data.qnty >= 1)
      data.qnty -= 1
  }

  addCart(data: any) {
    this.cart.addToCart(data);      // add product to cart
    window.alert('Your product has been added to the cart!');
  }

  logout() {
    var click
    if (confirm('Are you sure ?') == true) {
      click = this.router.navigate([this.theUrl])
    }
    else {
      click = this.router.navigate(["product"])
    }
  }


}
