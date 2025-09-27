
import { SketchCollector } from '../../sketchCollector';

export class CintasMyshopCollector extends SketchCollector {

    static CONFIG = {
        id: "cintas_myshop",
        name: "Cintas - MyShop",
        description: "i18n.collectors.cintas_myshop.description",
        version: "0",
        website: "https://shop.mycintas.com/site/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1197162.jpg",
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
        entryUrl: "https://shop.mycintas.com/site/login",
    }

    constructor() {
        super(CintasMyshopCollector.CONFIG);
    }
}
