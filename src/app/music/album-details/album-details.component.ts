import { Component } from '@angular/core';

@Component({
    templateUrl: "./album-details.component.html",
    selector: "album-details",
    styleUrls: ["./album-details.component.css"]
})
export class AlbumDetailsComponent{
    song = {  	
        "songName": "Shape of you",
        // "imageUrl": "assets/images/java8_in_action.jpeg",
        "title": "Shape of you",
        "artist": [
              {"firstName": " Ed ", "lastName": "Sheeran"},
              
         ],
         "category": " Pop",
         "rating": 4.4,
        
         "releaseDate": new Date(2018,5,23)
        }
    }