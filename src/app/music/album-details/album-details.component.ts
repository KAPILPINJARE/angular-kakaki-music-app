import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
import { ActivatedRoute } from '@angular/router';
import { Album, Song } from '../music';

@Component({
    templateUrl: "./album-details.component.html",
    selector: "album-details",
    styleUrls: ["./album-details.component.css"]
})
export class AlbumDetailsComponent implements OnInit {

    constructor(private musicService: MusicService,
            private route: ActivatedRoute) { }

    album: Album;
    song:Song;
    
    ngOnInit(): void {
        this.route.paramMap.subscribe((map) => {
            let albumId = Number(map.get("albumId"));

            this.musicService.albumDetails(albumId).subscribe((data) => {
                this.album = data;
            });
        });
    }

    play(song:Song):void {
        
        this.song=song;
     }

}