import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  newLog = new Login()
  isLoggedIn: boolean = false
  returnUrl = "product"

  login() {
    if (this.newLog.username == "user" && this.newLog.password == "user") {
      console.log("Login successful")
      this.isLoggedIn = true;
      localStorage.setItem("status", "true")
      this.router.navigate([this.returnUrl]);
    }
    else {
      this.router.navigate(["login"]);
      window.alert('Incorrect Username or Password');
    }
  }

}
