export class Music{
    songId : number;
    songName: string;
    songImage:string;
    albumName: string;
    artist: string;
    song: string;
}

export class Album{
    albumId: number;
    albumImage: string;
    album:string;
    songs:Music[];
    artist:string;
}

export class Artist{
    artistId: number;
    artistName:string;
    artistImage:string;
    song:Music[];
}