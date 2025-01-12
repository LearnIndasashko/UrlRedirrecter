import { IShortenRepository } from "../../application";
import { ShortenRepository } from "../../infrastructure";
import { sync } from "../database";


describe("short url tst",  ()=> {

    let repo : IShortenRepository;

    beforeEach(
        async()=> {
            await sync();
            repo = new ShortenRepository();
        }
    )

    it("create", async()=>{
        const ent = await repo.create({
            originalUrl : "http://goolge.com", 
        })
        expect(ent.clickCount).toBe(0);
        expect(ent.short.length).toBe(6);
        expect(ent.originalUrl).toBe("http://goolge.com");
    });

    it("create with alias", async ()=> {
        const ent = await repo.create({
            originalUrl : "http://goolge.com",
            alias : "bg"
        });
        expect(ent.clickCount).toBe(0);
        expect(ent.short).toBe("bg");
        expect(ent.originalUrl).toBe("http://goolge.com");
    });

    it("create with alias 21 length", async ()=> {
        const ent = await repo.create({
            originalUrl : "http://goolge.com",
            alias : "bg"
        });
        expect(ent.clickCount).toBe(0);
        expect(ent.short).toBe("bg");
        expect(ent.originalUrl).toBe("http://goolge.com");
    })
});