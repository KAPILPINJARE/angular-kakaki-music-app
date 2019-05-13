import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
import { ActivatedRoute } from '@angular/router';
import {  Song, Artist } from '../music';

@Component({
    templateUrl: "./artist-details.component.html",
    selector: "album-details",
    styleUrls: ["./artist-details.component.css"]
})
export class ArtistDetailsComponent implements OnInit {

    constructor(private musicService: MusicService,
            private route: ActivatedRoute) { }

            artist: Artist;
            song:Song;
    
    ngOnInit(): void {
        this.route.paramMap.subscribe((map) => {
            let artistId = Number(map.get("artistId"));

            this.musicService.artistDetails(artistId).subscribe((data) => {
                this.artist = data;
            });
        });
    }

    play(song:Song):void {
        
        this.song=song;
     }

}