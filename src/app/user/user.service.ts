import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { Song } from '../music/music';


@Injectable()
export class UserService{
    

    baseUrl = "http://localhost:8081/";

    constructor(private http: HttpClient){}

    newUser(user: User): Observable<User> {
        return this.http.post<User>(this.baseUrl + "user", user);
    }

    getUserByEmail(email:string):Observable<User> {
       return this.http.get<User>(this.baseUrl+ "user/bymail/" + email);
    }

    addToFavourite(user:User):Observable<User>{
        return this.http.put<User>(this.baseUrl + "user" , user);
    }

    getAllFavouriteSongs(email:string):Observable<Song[]>{
        return this.http.get<Song[]>(this.baseUrl +"user/favourite/" + email);
    }

    deleteFavourite(user:User,songId:number):Observable<User>{
        return this.http.put<User>(this.baseUrl + "user/update/"+ songId,user);
    }
}