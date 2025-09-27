
import { SketchCollector } from '../../sketchCollector';

export class WizzairComCollector extends SketchCollector {

    static CONFIG = {
        id: "wizzair_com",
        name: "wizzair.com",
        description: "i18n.collectors.wizzair_com.description",
        version: "0",
        website: "https://wizzair.com/de-de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/428123.jpg",
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
        entryUrl: "https://wizzair.com/de-de",
    }

    constructor() {
        super(WizzairComCollector.CONFIG);
    }
}
