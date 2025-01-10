import { CreateData, ShortenInfoResponse } from "@app";

export interface IShortenService {
    get(shortUrl: string): Promise<ShortenInfoResponse>;
    delete(shortUrl: string): Promise<void>;
    getOriginalUrl(shortUrl: string): Promise<string>;
    create(data: CreateData): Promise<string>;
}