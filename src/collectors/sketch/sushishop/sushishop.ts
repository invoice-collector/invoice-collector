
import { SketchCollector } from '../../sketchCollector';

export class SushishopCollector extends SketchCollector {

    static CONFIG = {
        id: "sushishop",
        name: "SushiShop",
        description: "i18n.collectors.sushishop.description",
        version: "0",
        website: "https://www.sushishop.fr/fr/authentification",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/123504.jpg",
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
        entryUrl: "https://www.sushishop.fr/fr/authentification",
    }

    constructor() {
        super(SushishopCollector.CONFIG);
    }
}
