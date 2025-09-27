
import { SketchCollector } from '../../sketchCollector';

export class HandlerbundCollector extends SketchCollector {

    static CONFIG = {
        id: "handlerbund",
        name: "Handlerbund",
        description: "i18n.collectors.handlerbund.description",
        version: "0",
        website: "https://www.haendlerbund.de/de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/25544.jpg",
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
        entryUrl: "https://www.haendlerbund.de/de",
    }

    constructor() {
        super(HandlerbundCollector.CONFIG);
    }
}
