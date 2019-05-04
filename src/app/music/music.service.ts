import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from './music';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class MusicService{
    baseUrl = "src/apk/albums/albums.json";
    constructor(private http:HttpClient){}

    allAlbums(album: string): Observable<Album[]>{
        return this.http.get<Album[]>(this.baseUrl + "albums/" + album);
    }

   
}