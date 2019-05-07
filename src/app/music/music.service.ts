import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album, Music } from './music';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class MusicService{
    baseUrl = "apk/albums/albums.json";
    constructor(private http:HttpClient){}

    allAlbums(album: string): Observable<Album[]>{
        return this.http.get<Album[]>(this.baseUrl);
    }

    allSongs():Observable<Album[]>{
        return this.http.get<Album[]>(this.baseUrl);
    }
   
}