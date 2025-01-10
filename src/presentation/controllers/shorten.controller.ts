import { controller, httpDelete, httpGet, httpPost } from "inversify-express-utils";
import {Request, Response, NextFunction} from "express"
import { inject } from "inversify";
import { 
    AnalitycResponse, CreateData, IAnaliticsService, 
    IShortenService, ShortenInfoResponse 
} from "@app";



@controller("/")
export class ShortenController {
    

    constructor(
        @inject("IShortenService") private readonly shortenService : IShortenService,
        @inject("IAnaliticsService") private readonly analiticsService : IAnaliticsService
    ) {

    }

    @httpPost("shorten")
    async create (request : Request, response : Response, next : NextFunction) {
        try {
            const data = request.body as CreateData;
            const shortUrl : string = await this.shortenService.create(data);
            return response.json(shortUrl).status(200);
        } catch(e) {
            next(e);
        }
    }    

    @httpGet(":shortUrl")
    async get (request : Request, response : Response, next : NextFunction) {
        try {
            const shortUrl = request.params.shortUrl;
            const originalUrl : string = await this.shortenService.getOriginalUrl(shortUrl);
            await this.analiticsService.addRedirect(request.ip)
            return response.redirect(originalUrl);
        } catch(e) {
            next(e);
        }
    }    

    @httpGet("info/:shortUrl")
    async getInfo (request : Request, response : Response, next : NextFunction) {
        try {
            const shortUrl = request.params.shortUrl;
            const shortUrlResponse  :  ShortenInfoResponse = await this.shortenService.get(shortUrl);
            return response.json(shortUrlResponse).status(200);
        } catch(e) {
            next(e);
        }
    }

    @httpDelete("delete/:shortUrl")
    async delete (request : Request, response : Response, next : NextFunction) {
        try {
            const shortUrl = request.params.shortUrl;
            await this.shortenService.delete(shortUrl);
            return response.json({message : "ok"}).status(200);
        } catch(e) {
            next(e);
        }
    }


    @httpGet("analytics/:shortUrl")
    async getAnalitic (request : Request, response : Response, next : NextFunction) {
        try {
            const shortUrl = request.params.shortUrl;
            const result : AnalitycResponse = await this.analiticsService.get(shortUrl);
            return response.json(result).status(200);
        } catch(e) {
            next(e);
        }
    }
}