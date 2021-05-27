import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-entry',
  templateUrl: './product-entry.component.html',
  styleUrls: ['./product-entry.component.css']
})

export class ProductEntryComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  productForm = this.fb.group({
    pid: ["", [Validators.required, Validators.minLength(3)]],
    name: ["", [Validators.required]],
    des: ["", [Validators.required]],
    price: ["", [Validators.required]],
    qnty: ["", [Validators.required]]
  })

  add() {
    (this.productForm.value)
  }

}
