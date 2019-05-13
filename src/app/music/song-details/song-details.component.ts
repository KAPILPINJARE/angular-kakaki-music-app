import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
import { ActivatedRoute } from '@angular/router';
import { Song } from '../music';




@Component({
    selector:"song-details",
    templateUrl:"./song-details.component.html",
    styleUrls:["./song-details.component.css"]
})
export class SongDetailsComponent implements OnInit{
    constructor(private musicService: MusicService,
        private route:ActivatedRoute){}

song:Song;

ngOnInit(): void {
this.route.paramMap.subscribe((map) =>{
    let songId = Number(map.get("songId"));
    
    this.musicService.songDetails(songId).subscribe((data) => {
        this.song = data;
    });
});
}

   
}