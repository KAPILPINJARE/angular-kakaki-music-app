import { Routes } from '@angular/router';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserFavouritesListComponent } from './user-favourites-list/user-favourites-list.component';


export const userRoutes : Routes = [
    { path: "signup" , component:UserSignupComponent },
    { path: "signin" , component:UserLoginComponent },
    { path: "favourites" , component:UserFavouritesListComponent },

]