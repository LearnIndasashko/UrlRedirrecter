import { ShortUrl } from "@domain";
import { CreateData } from "../dto";

export interface IShortenRepository {
    increese(shortUrl: string): Promise<void>;
    create(data: CreateData): Promise<ShortUrl>;
    delete(shortUrl: string): Promise<void>;
    getByShortUrl(shortUrl: string, deadline?: boolean): Promise<ShortUrl>;
}