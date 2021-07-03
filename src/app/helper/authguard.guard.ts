import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    const currentuser = JSON.parse(localStorage.getItem('currentuser')!)
    console.log(currentuser)
    if (currentuser) {
      console.log((currentuser.username))
      console.log("activate")
      return true;
    }
    this.router.navigate(['login'])
    return false;
  }


}
