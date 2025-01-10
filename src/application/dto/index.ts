export interface CreateData {
    originalUrl : string;
    createdAt : Date;
    clickCount : number;
    expiresAt? : Date;
    alias? : string;
}

export interface AnalitycResponse {
    redirrectsCount : number;
    ips : string[]
}

export interface ShortenInfoResponse {
    originalUrl : string;
    createdAt : Date;
    clickCount : number;
}