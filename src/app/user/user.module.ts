import { NgModule } from '@angular/core';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserFavouritesListComponent } from './user-favourites-list/user-favourites-list.component';
import { UserSavedListComponent } from './user-savedlist/user-savelist.component';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';


@NgModule({
    declarations:[
        UserSignupComponent,
        UserLoginComponent,
        UserFavouritesListComponent,
        UserSavedListComponent
        
    ],
    imports:[
        BrowserModule,

        RouterModule.forRoot(userRoutes)
    ],
    exports:[
        UserSignupComponent,
        UserLoginComponent,
        UserFavouritesListComponent,
        UserSavedListComponent
    ],
    providers:[]
})
export class UserModule{}