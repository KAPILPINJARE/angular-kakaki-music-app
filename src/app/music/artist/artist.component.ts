import { Component } from '@angular/core';

@Component({
    selector:"artist",
    templateUrl:"./artist.component.html"
})
export class ArtistComponent{

    artists= [
        { 
            id:101,
            image: "assets/images/v1.jpg",
            album:"fantum",
            songs:[
                {
                    song: "assets/media/Blue Brown.mp3"
                },
                {
                    song:"assets/media/Georgia.mp3"
                }
            ],
            artist:"shakira"    
        },
        { 
            id:102,
            image: "assets/images/v2.jpg",
            album:"san",
            songs:[
                {
                    song: "assets/media/Blue Brown.mp3"
                },
                {
                    song:"assets/media/Georgia.mp3"
                }
            ],
            artist:"honeysingh",
            songName: "two"    
        },
        { 
            id:103,
            image: "assets/images/v3.jpg",
            album:"ny",
            songs:[
                {
                    song: "assets/media/Blue Brown.mp3"
                },
                {
                    song:"assets/media/Georgia.mp3"
                }
            ],
            artist:"badshah",
            songName: "three"    
        },
        { 
            id:104,
            image: "assets/images/v4.jpg",
            album:"ing",
            songs:[
                {
                    song: "assets/media/Blue Brown.mp3"
                },
                {
                    song:"assets/media/Georgia.mp3"
                }
            ],
            artist:"gold",
            songName: "four"    
        },
        { 
            id:105,
            image: "assets/images/v5.jpg",
            album:"prep",
            songs:[
                {
                    song: "assets/media/Blue Brown.mp3"
                },
                {
                    song:"assets/media/Georgia.mp3"
                }
            ],
            artist:"silver",
            songName: "five"    
        },
        { 
            id:106,
            image: "assets/images/v1.jpg",
            album:"dim",
            songs:[
                {
                    song: "assets/media/Blue Brown.mp3"
                },
                {
                    song:"assets/media/Georgia.mp3"
                }
            ],
            artist:"shakira",
            songName: "six"    
        },
        { 
            id:107,
            image: "assets/images/v2.jpg",
            album:"clim",
            songs:[
                {
                    song: "assets/media/Blue Brown.mp3"
                },
                {
                    song:"assets/media/Georgia.mp3"
                }
            ],
            artist:"shakira",
            songName: "seven"    
        },
        { 
            id:108,
            image: "assets/images/v3.jpg",
            album:"pep",
            songs:[
                {
                    song: "assets/media/Blue Brown.mp3"
                },
                {
                    song:"assets/media/Georgia.mp3"
                }
            ],
            artist:"shakira",
            songName: "eight"    
        },
        { 
            id:109,
            image: "assets/images/v4.jpg",
            album:"hel",
            songs:[
                {
                    song: "assets/media/Blue Brown.mp3"
                },
                {
                    song:"assets/media/Georgia.mp3"
                }
            ],
            artist:"shakira",
            songName: "nine"    
        },
        { 
            id:110,
            image: "assets/images/v5.jpg",
            album:"ball",
            songs:[
                {
                    song: "assets/media/Blue Brown.mp3"
                },
                {
                    song:"assets/media/Georgia.mp3"
                }
            ],
            artist:"shakira",
            songName: "ten"    
        },
        { 
            id:101,
            image: "assets/images/v1.jpg",
            album:"kun",
            songs:[
                {
                    song: "assets/media/Blue Brown.mp3"
                },
                {
                    song:"assets/media/Georgia.mp3"
                }
            ],
            artist:"shakira",
            songName: "one"    
        },
        { 
            id:102,
            image: "assets/images/v2.jpg",
            album:"ding",
            songs:[
                {
                    song: "assets/media/Blue Brown.mp3"
                },
                {
                    song:"assets/media/Georgia.mp3"
                }
            ],
            artist:"shakira",
            songName: "two"    
        },
        { 
            id:103,
            image: "assets/images/v3.jpg",
            album:"dong",
            songs:[
                {
                    song: "assets/media/Blue Brown.mp3"
                },
                {
                    song:"assets/media/Georgia.mp3"
                }
            ],
            artist:"shakira",
            songName: "three"    
        },
        { 
            id:104,
            image: "assets/images/v4.jpg",
            album:"pong",
            songs:[
                {
                    song: "assets/media/Blue Brown.mp3"
                },
                {
                    song:"assets/media/Georgia.mp3"
                }
            ],
            artist:"shakira",
            songName: "four"    
        },
        { 
            id:105,
            image: "assets/images/v5.jpg",
            album:"jong",
            songs:[
                {
                    song: "assets/media/Blue Brown.mp3"
                },
                {
                    song:"assets/media/Georgia.mp3"
                }
            ],
            artist:"shakira",
            songName: "five"    
        }
    ]
}