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
        this.route.paramMap.subscribe((map) => {
            let album = map.get("album");
            console.log(album);
            
            this.musicService.allAlbums(album).subscribe((data) =>{
                this.albums = data; 
                console.log(data);
            });
        })
    }

}