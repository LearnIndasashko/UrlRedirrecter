import { Container } from "inversify";
import { ShortenController } from "../controllers";
import { AnaliticsService, IAnaliticsService, IShortenService, ShortenService } from "@app";



export const container = new Container();
container.bind<ShortenController>(ShortenController).toSelf();
container.bind<IShortenService>("IShortenService").to(ShortenService);
container.bind<IAnaliticsService>("IAnaliticsService").to(AnaliticsService);
