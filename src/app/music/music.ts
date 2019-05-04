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
    albumName: string;
    albumImage: string;
    song:Music[];
}

export class Artist{
    artistId: number;
    artistName:string;
    artistImage:string;
    song:Music[];
}