import { AnaliticCreationData, IAnaliticsRepository } from "@app";
import { RedirrectAnalitic } from "@domain";
import { RedirectAnaliticModel } from "../models";

export class AnaliticRepository implements IAnaliticsRepository {
    async create(data : AnaliticCreationData): Promise<void> {
        await RedirectAnaliticModel.create({
            ip : data.ip,
            shortUrl : data.shortUrl 
        })
    }
    async getCount(shortUrl: string): Promise<number> {
        return await RedirectAnaliticModel.count({where : {shortUrl : shortUrl}});
    }
    async getLast(shortUrl: string): Promise<RedirrectAnalitic[]> {
        return await RedirectAnaliticModel.findAll({
            where : {
                shortUrl : shortUrl
            },
            order: [['createdAt', 'DESC']],
            limit: 5,
          });
    }
}