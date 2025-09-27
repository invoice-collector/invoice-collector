
import { SketchCollector } from '../../sketchCollector';

export class CockatooCollector extends SketchCollector {

    static CONFIG = {
        id: "cockatoo",
        name: "Cockatoo",
        description: "i18n.collectors.cockatoo.description",
        version: "0",
        website: "https://checkout.cockatoo.com/p/session/live_YWNjdF8xSjZJMWpKUm1FUzNuaWNVLF9QdmdidW96aUlibXpPWVBkT2d6cVc1aEpER01ocjJ20100vWsVuOYW",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2728473.jpg",
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://checkout.cockatoo.com/p/session/live_YWNjdF8xSjZJMWpKUm1FUzNuaWNVLF9QdmdidW96aUlibXpPWVBkT2d6cVc1aEpER01ocjJ20100vWsVuOYW",
    }

    constructor() {
        super(CockatooCollector.CONFIG);
    }
}
