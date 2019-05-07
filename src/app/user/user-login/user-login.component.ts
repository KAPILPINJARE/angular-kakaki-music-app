import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector:"login",
    templateUrl:"./user-login.component.html",
    styleUrls:["./user-login.component.css"]
})
export class UserLoginComponent{
    constructor(
        private router: Router,
       ) {}
   
     onSubmit() {
       this.router.navigate(['/main']);
    }
    
}