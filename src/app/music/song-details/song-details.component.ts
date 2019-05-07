import { Component } from '@angular/core';




@Component({
    selector:"song-details",
    templateUrl:"./song-details.component.html",
    styleUrls:["./song-details.component.css"]
})
export class SongDetailsComponent{
    song={ 
        "id":101,
        "image": "assets/images/v1.jpg",
        "album":"fantum",
        "artist":"shakira",
        "songName": "one"    
    }
}