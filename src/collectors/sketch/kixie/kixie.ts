
import { SketchCollector } from '../../sketchCollector';

export class KixieCollector extends SketchCollector {

    static CONFIG = {
        id: "kixie",
        name: "KIXIE",
        description: "i18n.collectors.kixie.description",
        version: "0",
        website: "https://www.kixie.com/app/billing.html?userid=&duration=&start=&end=&businessid=",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/138730.jpg",
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
        entryUrl: "https://www.kixie.com/app/billing.html?userid=&duration=&start=&end=&businessid=",
    }

    constructor() {
        super(KixieCollector.CONFIG);
    }
}
