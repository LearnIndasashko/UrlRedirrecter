import { Container } from "inversify";
import { ShortenController } from "../controllers";



export const container = new Container();
container.bind<ShortenController>(ShortenController).toSelf();