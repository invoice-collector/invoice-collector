
import { SketchCollector } from '../../sketchCollector';

export class ElektroSkateboardShopCollector extends SketchCollector {

    static CONFIG = {
        id: "elektro_skateboard_shop",
        name: "Elektro Skateboard Shop",
        description: "i18n.collectors.elektro_skateboard_shop.description",
        version: "0",
        website: "https://shop.elektro-skateboard.de/rechnungen/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/652442.jpg",
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
        entryUrl: "https://shop.elektro-skateboard.de/rechnungen/",
    }

    constructor() {
        super(ElektroSkateboardShopCollector.CONFIG);
    }
}
