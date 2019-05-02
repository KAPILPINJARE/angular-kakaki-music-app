import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AllSongsComponent } from './all-songs/all-songs.component';
import { AllAlbumsComponent } from './all-albums/all-albums.component';
import { ArtistComponent } from './artist/artist.component';


@NgModule({
    declarations: [
        AllSongsComponent,
        AllAlbumsComponent,
        ArtistComponent
      ],
      imports: [
        BrowserModule
      ],
      providers: [],
      exports:[
        AllSongsComponent,
        AllAlbumsComponent,
        ArtistComponent
      ],
      bootstrap: []
})
export class MusicModule{}