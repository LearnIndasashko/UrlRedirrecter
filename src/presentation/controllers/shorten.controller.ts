import { controller, httpDelete, httpGet, httpPost } from "inversify-express-utils";
import {Request, Response, NextFunction} from "express"
import { ShortUrl } from "@domain";

interface CreateData {
    originalUrl : string;
    createdAt : Date;
    clickCount : number;
    expiresAt? : Date;
    alias? : string;
}

interface AnalitycResponse {
    redirrectsCount : number;
    ips : string[]
}

@controller("/")
export class ShortenController {
    
    @httpPost("shorten")
    async create (request : Request, response : Response, next : NextFunction) {
        try {
            const data = request.body as CreateData;
            const shortUrl : string = "";
            /// TODO : service work
            return response.json(shortUrl).status(200);
        } catch(e) {
            next(e);
        }
    }    

    @httpGet(":shortUrl")
    async get (request : Request, response : Response, next : NextFunction) {
        try {
            const shortUrl = request.params.shortUrl;
            const originalUrl = "";
            /// TODO : service work
            /// TODO : analitic service work
            return response.redirect(originalUrl);
        } catch(e) {
            next(e);
        }
    }    

    @httpGet("info/:shortUrl")
    async getInfo (request : Request, response : Response, next : NextFunction) {
        try {
            const shortUrl = request.params.shortUrl;
            const shortUrlResponse  : ShortUrl= undefined;
            /// TODO : service work
            return response.json(shortUrlResponse).status(200);
        } catch(e) {
            next(e);
        }
    }

    @httpDelete("delete/:shortUrl")
    async delete (request : Request, response : Response, next : NextFunction) {
        try {
            const shortUrl = request.params.shortUrl;
            /// TODO : service work
            return response.json({message : "ok"}).status(200);
        } catch(e) {
            next(e);
        }
    }


    @httpGet("analytics/:shortUrl")
    async getAnalitic (request : Request, response : Response, next : NextFunction) {
        try {
            const shortUrl = request.params.shortUrl;
            /// TODO : analityc  service work
            const result : AnalitycResponse = undefined;
            return response.json(result).status(200);
        } catch(e) {
            next(e);
        }
    }
}