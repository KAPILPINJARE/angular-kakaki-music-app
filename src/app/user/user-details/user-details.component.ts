import { Component } from '@angular/core';

@Component({
    templateUrl: "./user-details.component.html",
})
export class UserDetailsComponent {
    user= {
        "userFirstName": "kapil",
        "userLastName": "pawar",
        "userEmail": "kapil.pawar@capgemini.com",
        "userContactNumber": 8602578883
    }
}