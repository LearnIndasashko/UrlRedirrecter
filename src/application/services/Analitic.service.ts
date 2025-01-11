import { inject, injectable } from "inversify";
import { AnaliticCreationData, AnalitycResponse, IAnaliticsRepository, IAnaliticsService } from "@app";
import { RedirrectAnalitic } from "@domain";


@injectable()
export class AnaliticsService implements IAnaliticsService {
    

    constructor(
        @inject("IAnaliticsRepository") private readonly analiticsRepository : IAnaliticsRepository
    ) {
    }

    async get(shortUrl: string): Promise<AnalitycResponse> {
        
        const redirects :  RedirrectAnalitic[] = await this.analiticsRepository.getLast(shortUrl); 
        const count : number = await this.analiticsRepository.getCount(shortUrl);
        const response : AnalitycResponse = {
            redirrectsCount : count,
            ips : redirects.map(r=>r.ip)
        }
        return response;

    }
    
    
    async addRedirect(data: AnaliticCreationData): Promise<void> {
        await this.analiticsRepository.create(data);
    }

}