
import { SketchCollector } from '../../sketchCollector';

export class BolComCollector extends SketchCollector {

    static CONFIG = {
        id: "bol_com",
        name: "bol.com",
        description: "i18n.collectors.bol_com.description",
        version: "0",
        website: "https://www.bol.com/nl/account/login.html?redirectUrl=https%3A%2F%2Fwww.bol.com%2Fnl%2Frnwy%2Faccount%2Foverzicht",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20445.jpg",
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
        entryUrl: "https://www.bol.com/nl/account/login.html?redirectUrl=https%3A%2F%2Fwww.bol.com%2Fnl%2Frnwy%2Faccount%2Foverzicht",
    }

    constructor() {
        super(BolComCollector.CONFIG);
    }
}
