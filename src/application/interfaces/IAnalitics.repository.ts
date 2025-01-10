import { RedirrectAnalitic } from "@domain";

export interface IAnaliticsRepository {

    create(ip: string): Promise<void>;
    getCount(shortUrl: string): Promise<number>;
    getLast(shortUrl: string): Promise<RedirrectAnalitic[]>;

}