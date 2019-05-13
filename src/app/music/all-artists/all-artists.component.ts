import { Component, OnInit } from '@angular/core';
import { Artist } from '../music';
import { MusicService } from '../music.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector:"artist",
    templateUrl:"./all-artists.component.html",
})
export class AllArtistComponent implements OnInit{

    artists: Artist[];
    constructor(private musicService:MusicService,
                private route:ActivatedRoute) {}

    ngOnInit(){
            this.musicService.allArtist().subscribe((data) =>{
                this.artists = data; 
            });
     
    }


}