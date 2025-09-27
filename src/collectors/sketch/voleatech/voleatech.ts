
import { SketchCollector } from '../../sketchCollector';

export class VoleatechCollector extends SketchCollector {

    static CONFIG = {
        id: "voleatech",
        name: "Voleatech",
        description: "i18n.collectors.voleatech.description",
        version: "0",
        website: "https://www.voleatech.de/de/mein-account/orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/81319.jpg",
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
        entryUrl: "https://www.voleatech.de/de/mein-account/orders/",
    }

    constructor() {
        super(VoleatechCollector.CONFIG);
    }
}
