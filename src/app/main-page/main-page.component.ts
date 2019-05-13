import { Component, OnInit } from "@angular/core";
import { User } from '../user/user';

@Component({
 templateUrl:'./main-page.component.html',
 selector:"main",
})
export class MainPageComponent implements OnInit{

    user:User;
    ngOnInit() {
        let user ={"firstName" : "kapil", "lastName":"pawar"};

        sessionStorage.setItem("user",JSON.stringify(user));



        console.log(JSON.parse(sessionStorage.getItem("user")));
    }

}