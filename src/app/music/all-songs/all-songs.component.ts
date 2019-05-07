import { Component, OnInit } from '@angular/core';
import { Music, Album } from '../music';
import { MusicService } from '../music.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector:"all-songs",
    templateUrl:"./all-songs.component.html"
})
export class AllSongsComponent implements OnInit{



    songs: Album[];

    constructor(private musicService:MusicService,
                private route:ActivatedRoute) {}

    ngOnInit(){
            this.musicService.allSongs().subscribe((data) =>{
                this.songs = data;
                console.log(data);
            });
    }
}
    // songs= [
    //     { 
    //         id:101,
    //         image: "assets/images/v1.jpg",
    //         album:"fantum",
    //         artist:"shakira",
    //         songName: "one"    
    //     },
    //     { 
    //         id:102,
    //         image: "assets/images/v2.jpg",
    //         album:"fantum",
    //         artist:"shakira",
    //         songName: "two"    
    //     },
    //     { 
    //         id:103,
    //         image: "assets/images/v3.jpg",
    //         album:"fantum",
    //         artist:"shakira",
    //         songName: "three"    
    //     },
    //     { 
    //         id:104,
    //         image: "assets/images/v4.jpg",
    //         album:"fantum",
    //         artist:"shakira",
    //         songName: "four"    
    //     },
    //     { 
    //         id:105,
    //         image: "assets/images/v5.jpg",
    //         album:"fantum",
    //         artist:"shakira",
    //         songName: "five"    
    //     },
    //     { 
    //         id:106,
    //         image: "assets/images/v1.jpg",
    //         album:"fantum",
    //         artist:"shakira",
    //         songName: "six"    
    //     },
    //     { 
    //         id:107,
    //         image: "assets/images/v2.jpg",
    //         album:"fantum",
    //         artist:"shakira",
    //         songName: "seven"    
    //     },
    //     { 
    //         id:108,
    //         image: "assets/images/v3.jpg",
    //         album:"fantum",
    //         artist:"shakira",
    //         songName: "eight"    
    //     },
    //     { 
    //         id:109,
    //         image: "assets/images/v4.jpg",
    //         album:"fantum",
    //         artist:"shakira",
    //         songName: "nine"    
    //     },
    //     { 
    //         id:110,
    //         image: "assets/images/v5.jpg",
    //         album:"fantum",
    //         artist:"shakira",
    //         songName: "ten"    
    //     },
    //     { 
    //         id:101,
    //         image: "assets/images/v1.jpg",
    //         album:"fantum",
    //         artist:"shakira",
    //         songName: "one"    
    //     },
    //     { 
    //         id:102,
    //         image: "assets/images/v2.jpg",
    //         album:"fantum",
    //         artist:"shakira",
    //         songName: "two"    
    //     },
    //     { 
    //         id:103,
    //         image: "assets/images/v3.jpg",
    //         album:"fantum",
    //         artist:"shakira",
    //         songName: "three"    
    //     },
    //     { 
    //         id:104,
    //         image: "assets/images/v4.jpg",
    //         album:"fantum",
    //         artist:"shakira",
    //         songName: "four"    
    //     },
    //     { 
    //         id:105,
    //         image: "assets/images/v5.jpg",
    //         album:"fantum",
    //         artist:"shakira",
    //         songName: "five"    
    //     },
    //     { 
    //         id:106,
    //         image: "assets/images/v1.jpg",
    //         album:"fantum",
    //         artist:"shakira",
    //         songName: "six"    
    //     },
    //     { 
    //         id:107,
    //         image: "assets/images/v2.jpg",
    //         album:"fantum",
    //         artist:"shakira",
    //         songName: "seven"    
    //     },
    //     { 
    //         id:108,
    //         image: "assets/images/v3.jpg",
    //         album:"fantum",
    //         artist:"shakira",
    //         songName: "eight"    
    //     },
    //     { 
    //         id:109,
    //         image: "assets/images/v4.jpg",
    //         album:"fantum",
    //         artist:"shakira",
    //         songName: "nine"    
    //     },
    //     { 
    //         id:110,
    //         image: "assets/images/v5.jpg",
    //         album:"fantum",
    //         artist:"shakira",
    //         songName: "ten"    
    //     }
    // ]
