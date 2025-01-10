import { Container } from "inversify";
import { ShortenController } from "../controllers";
import { AnaliticsService, IAnaliticsRepository, IAnaliticsService, IShortenRepository, IShortenService, ShortenService } from "@app";
import { AnaliticRepository, SequelizeClient, ShortenRepository } from "@infrastructure";



export const container = new Container();
container.bind<ShortenController>(ShortenController).toSelf();
container.bind<IShortenService>("IShortenService").to(ShortenService);
container.bind<IAnaliticsService>("IAnaliticsService").to(AnaliticsService);
container.bind<SequelizeClient>(SequelizeClient).toSelf().inSingletonScope();
container.bind<IAnaliticsRepository>("IAnaliticsRepository").to(AnaliticRepository);
container.bind<IShortenRepository>("IShortenRepository").to(ShortenRepository);