import { Component } from '@angular/core';

@Component({
    selector:"fav-list",
    templateUrl:"./user-favourites-list.component.html",
    styleUrls:["./user-favourites-list.component.css"]
})
export class UserFavouritesListComponent{

     oNav() {
        document.getElementById("mySidenav").style.width = "200px";
      }
      
       cNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
}