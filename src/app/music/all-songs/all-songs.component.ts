import { Component, OnInit } from '@angular/core';
import { Song } from '../music';
import { MusicService } from '../music.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector:"all-songs",
    templateUrl:"./all-songs.component.html"
})
export class AllSongsComponent implements OnInit{



    songs: Song[];

    constructor(private musicService:MusicService,
                private route:ActivatedRoute) {}

    ngOnInit(){
            this.musicService.allSongs().subscribe((data) =>{
                this.songs = data;
                console.log(data);
            });
    }
}
    
