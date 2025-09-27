
import { SketchCollector } from '../../sketchCollector';

export class ShipitoComCollector extends SketchCollector {

    static CONFIG = {
        id: "shipito_com",
        name: "Shipito.com",
        description: "i18n.collectors.shipito_com.description",
        version: "0",
        website: "https://www.shipito.com/de/account/login?nextpage=https%3A%2F%2Fwww.shipito.com%2Fen%2Faccount%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/126666.jpg",
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
        entryUrl: "https://www.shipito.com/de/account/login?nextpage=https%3A%2F%2Fwww.shipito.com%2Fen%2Faccount%2F",
    }

    constructor() {
        super(ShipitoComCollector.CONFIG);
    }
}
