import { v4 } from "uuid";
import { Op } from "sequelize";
import { ShortUrl } from "@domain";
import { IShortenRepository,CreateData, ApiError } from "@app";
import { ShortedModel } from "../models";

export class ShortenRepository implements IShortenRepository {
    async create(data: CreateData): Promise<ShortUrl> {
        let short : string = "";
        if (data.alias) {
            if (data.alias.length > 20) {
                throw ApiError.BadRequest("alias length > 20");
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
                        { expiresAt: { [Op.lt]: new Date() } },
                      ],
                }
            });
        }
    }
    
}