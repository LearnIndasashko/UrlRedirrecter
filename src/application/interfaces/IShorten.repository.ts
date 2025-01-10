import { ShortUrl } from "@domain";
import { CreateData } from "../dto";

export interface IShortenRepository {
    create(data: CreateData): Promise<ShortUrl>;
    delete(shortUrl: string): Promise<void>;
    getByShortUrl(shortUrl: string, deadline?: boolean): Promise<ShortUrl>;
}