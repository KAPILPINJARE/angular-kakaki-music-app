import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { Song } from '../music/music';

@Injectable()

export class AdminService{
    baseUrl = "http://10.246.93.39:8081/admin";

    constructor(private http: HttpClient){}

    // findUserByCategory(category: string): Observable<Book[]>
    // {
    //     return this.http.get<Book[]>(this.baseUrl + "books/" + _id);
    // }
    findAllUser():Observable<User[]>{
        return this.http.get<User[]>(this.baseUrl );
    }

    CreateAlbum():Observable<Song[]>{
        return this.http.get<Song[]>(this.baseUrl);
    }

    CreateArtist():Observable<Song[]>{
        return this.http.get<Song[]>(this.baseUrl);
    }

    UploadSong():Observable<Song[]>{
        return this.http.get<Song[]>(this.baseUrl);
    }
}