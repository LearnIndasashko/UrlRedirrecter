import { inject, injectable } from "inversify";
import { IShortenRepository, IShortenService, ShortenInfoResponse, CreateData  } from "@app";
import { ShortUrl } from "@domain";

@injectable()
export class ShortenService implements IShortenService {
    
    constructor(
        @inject("IShortenRepository") private readonly shortenRepository : IShortenRepository
    ) {

    }
    
    async get(shortUrl: string): Promise<ShortenInfoResponse> {
        const shorten : ShortUrl=  await this.shortenRepository.getByShortUrl(shortUrl);
        const response : ShortenInfoResponse = {
            clickCount : shorten.clickCount,
            createdAt : shorten.createdAt,
            originalUrl : shorten.originalUrl
        }
        return response;
    }

    async delete(shortUrl: string): Promise<void> {
        await this.shortenRepository.delete(shortUrl);
    }
    async getOriginalUrl(shortUrl: string): Promise<string> {
        const shorten : ShortUrl=  await this.shortenRepository.getByShortUrl(shortUrl);
        return shorten.originalUrl; 
    }

    async create(data: CreateData): Promise<string> {
        const shorten : ShortUrl = await this.shortenRepository.create(data);
        return shorten.originalUrl;
    }

}