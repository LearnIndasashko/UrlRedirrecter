import { v4 } from "uuid";
import { Op } from "sequelize";
import { ShortUrl } from "@domain";
import { IShortenRepository,CreateData, ApiError } from "@app";
import { ShortedModel } from "../models";
import { Sequelize } from "sequelize-typescript";

export class ShortenRepository implements IShortenRepository {
    
    private readonly allisRegex = /^[a-zA-Z0-9\-_]+$/;
   
    async increese(shortUrl: string): Promise<void> {
        await ShortedModel.update({
            clickCount : Sequelize.literal(`"clickCount" + 1`)
        }, {
            where : {
                short : shortUrl
            }
        })
    }
    async create(data: CreateData): Promise<ShortUrl> {
        
        let short : string = "";
        if (data.alias) {
            if (data.alias.length > 20) {
                throw ApiError.BadRequest("alias length > 20");
            }
            if (!this.allisRegex.test(data.alias)) {
                throw ApiError.BadRequest("alias wrong symbols");
            }
            short = data.alias;
        } else {
            short = v4().substring(0,6);
        }
        return await ShortedModel.create({
            expiresAt : data.expiresAt,
            short,
            originalUrl : data.originalUrl
        }) as ShortUrl;
    }

    async delete(shortUrl: string): Promise<void> {
        await ShortedModel.destroy({
            where : {
                short : shortUrl
            }
        });
    }
    async getByShortUrl(shortUrl: string, deadline? : boolean): Promise<ShortUrl> {
        if (!deadline) {
            return await ShortedModel.findOne({
                where : {
                    short : shortUrl
                }
            });
        } else {
            return await ShortedModel.findOne({
                where : {
                    short : shortUrl,
                    [Op.or]: [
                        { expiresAt: null },
                        { expiresAt: { [Op.gt]: Sequelize.literal("CURRENT_TIMESTAMP")} },
                      ],
                }
            });
        }
    }
    
}