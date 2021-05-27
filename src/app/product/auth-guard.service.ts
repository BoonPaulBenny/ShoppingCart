import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }
  canActivate(activate: ActivatedRouteSnapshot, route: RouterStateSnapshot) {
    if (this.isLoggedIn()) {
      return true;
    }
    else {
      return false;
    }
    this.router.navigate(["login"])
  }



  isLoggedIn() {
    if (localStorage.getItem("status") == "true") {
      return true;
    }
    else {
      return false;
    }
  }

}
