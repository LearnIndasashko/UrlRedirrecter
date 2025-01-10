import { Container } from "inversify";
import { ShortenController } from "../controllers";
import { IAnaliticsService, IShortenService } from "@app";



export const container = new Container();
container.bind<ShortenController>(ShortenController).toSelf();
container.bind<IShortenService>("IShortenService").to();
container.bind<IAnaliticsService>("IAnaliticsService").to();
