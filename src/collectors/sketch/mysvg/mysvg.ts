
import { SketchCollector } from '../../sketchCollector';

export class MysvgCollector extends SketchCollector {

    static CONFIG = {
        id: "mysvg",
        name: "mySVG",
        description: "i18n.collectors.mysvg.description",
        version: "0",
        website: "https://mysvg.de/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/161955.jpg",
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
        entryUrl: "https://mysvg.de/invoices",
    }

    constructor() {
        super(MysvgCollector.CONFIG);
    }
}
