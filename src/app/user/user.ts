import { Song } from '../music/music';



export class User{
    userId:number;
    userName:string;
    userFirstName:string;
    userLastName:string;
    userEmail:string;
    userContactNumber:number;
    userPassword:string;
    SecurityQuestion:string;
    SecurtyAnswer:string;
    userFavourite:number[];
}

export class UserFavourite{
    userEmail:string;
    favouriteSong:number[];
}