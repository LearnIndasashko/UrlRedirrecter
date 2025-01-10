import { AnalitycResponse } from "@app";

export interface IAnaliticsService {
    get(shortUrl: string): Promise<AnalitycResponse>;
    addRedirect(ip: string): Promise<void>;
}