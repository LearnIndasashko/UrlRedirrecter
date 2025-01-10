import { RedirrectAnalitic } from "@domain";
import { AnaliticCreationData } from "@app";

export interface IAnaliticsRepository {

    create(data : AnaliticCreationData): Promise<void>;
    getCount(shortUrl: string): Promise<number>;
    getLast(shortUrl: string): Promise<RedirrectAnalitic[]>;

}