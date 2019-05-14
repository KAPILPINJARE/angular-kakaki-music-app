import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/music/music.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Song } from 'src/app/music/music';
import { User } from '../user';
import { userInfo } from 'os';




@Component({
    templateUrl: "./user-favourites-list-details.component.html",
    styleUrls: ["./user-favourites-list-details.component.css"]
})
export class UserFavouritesListDetailsComponent implements OnInit {
    constructor(private musicService: MusicService,
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService) { }

    song: Song;
    user: User;
    ngOnInit(): void {
        this.user = JSON.parse(sessionStorage.getItem("user"));
        if (this.user != null) {
            this.route.paramMap.subscribe((map) => {
                let songId = Number(map.get("songId"));

                this.musicService.songDetails(songId).subscribe((data) => {
                    this.song = data;
                });
            });
        } else {
            this.router.navigate(["/signin"]);
            alert("please login to access");
        }
    }

    oNav() {
        document.getElementById("mySidenav").style.width = "200px";
    }

    cNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    logout() {
        sessionStorage.removeItem("user");
        this.router.navigate(["/signin"]);
    }


    deleteFavourite(songId:number){
        this.userService.deleteFavourite(this.user,songId).subscribe((data) => {
            alert("deleted successfully");
            this.router.navigate(["/favourites"]);
        })
    }
}