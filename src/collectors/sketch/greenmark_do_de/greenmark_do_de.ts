
import { SketchCollector } from '../../sketchCollector';

export class GreenmarkDoDeCollector extends SketchCollector {

    static CONFIG = {
        id: "greenmark_do_de",
        name: "Greenmark Do.de",
        description: "i18n.collectors.greenmark_do_de.description",
        version: "0",
        website: "https://my.do.de/finance/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1471266.jpg",
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
        entryUrl: "https://my.do.de/finance/invoices",
    }

    constructor() {
        super(GreenmarkDoDeCollector.CONFIG);
    }
}
