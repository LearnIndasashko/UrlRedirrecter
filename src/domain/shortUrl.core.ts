export class ShortUrl {
    short : string;
    originalUrl : string;
    createdAt : Date;
    clickCount : number;
    expiresAt? : Date;
}