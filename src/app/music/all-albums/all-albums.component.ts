import { Component, OnInit } from '@angular/core';
import { Album } from '../music';
import { ActivatedRoute } from '@angular/router';
import { MusicService } from '../music.service';


@Component({
    selector:"all-albums",
    templateUrl:"./all-albums.component.html"
})
export class AllAlbumsComponent implements OnInit{

    albums: Album[];
    constructor(private musicService:MusicService,
                private route:ActivatedRoute) {}

    ngOnInit(){
            this.musicService.allAlbums().subscribe((data) =>{
                this.albums = data; 
            });
     
    }

}