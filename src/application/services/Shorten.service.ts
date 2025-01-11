import { inject, injectable } from "inversify";
import { IShortenRepository, IShortenService, ShortenInfoResponse, CreateData, ApiError  } from "@app";
import { ShortUrl } from "@domain";

@injectable()
export class ShortenService implements IShortenService {
    
    constructor(
        @inject("IShortenRepository") private readonly shortenRepository : IShortenRepository
    ) {

    }
    async increese(shortUrl: string): Promise<void> {
        await this.shortenRepository.increese(shortUrl);
    }
    
    async get(shortUrl: string): Promise<ShortenInfoResponse> {
        const shorten : ShortUrl=  await this.shortenRepository.getByShortUrl(shortUrl);
        if (!shorten) {
            throw ApiError.NotFound();
        }
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
        const shorten : ShortUrl=  await this.shortenRepository.getByShortUrl(shortUrl, true);
        if (!shorten) {
            throw ApiError.NotFound()
        }
        return shorten.originalUrl; 
    }

    async create(data: CreateData): Promise<string> {
        const shorten : ShortUrl = await this.shortenRepository.create(data);
        return shorten.originalUrl;
    }

}