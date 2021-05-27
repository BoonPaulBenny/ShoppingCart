import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItemsService } from 'src/app/cart-items.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  items = this.cart.getItems();
  totalamount: number = 0;
  theUrl = "home"

  constructor(private cart: CartItemsService, private router: Router) { }

  ngOnInit(): void {
  }

  getTotal() {
    let total = 0
    for (var i = 0; i < this.items.length; i++) {
      total += this.items[i].price * this.items[i].qnty
      this.totalamount = total
    }
    return total
  }

  clear() {
    if (this.items == "") {
      alert('Enter items to cart !')
    }
    else {
      this.items = this.cart.clearCart()
      this.totalamount = 0
      return this.items
    }
  }

  logout() {
    var click
    if (confirm('Are you sure ?') == true) {
      click = this.router.navigate([this.theUrl])
    }
    else {
      click = this.router.navigate(["cart"])
    }
  }

}
