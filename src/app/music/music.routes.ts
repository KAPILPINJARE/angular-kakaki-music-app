import { Routes } from "@angular/router";
import { AllSongsComponent } from './all-songs/all-songs.component';
import { SongDetailsComponent } from './song-details/song-details.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AllAlbumsComponent } from './all-albums/all-albums.component';

export const musicroutes: Routes = [
    { path: "allsongs", component: AllSongsComponent },
    { path: "songdetails", component: SongDetailsComponent },
    { path: "allalbums", component: AllAlbumsComponent },
    { path: "albumdetails", component: AlbumDetailsComponent },
];