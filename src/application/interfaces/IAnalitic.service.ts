import { AnaliticCreationData, AnalitycResponse } from "@app";

export interface IAnaliticsService {
    get(shortUrl: string): Promise<AnalitycResponse>;
    addRedirect(data: AnaliticCreationData): Promise<void>;
}