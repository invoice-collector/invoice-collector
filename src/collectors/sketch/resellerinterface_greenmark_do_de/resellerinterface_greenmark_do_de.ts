
import { SketchCollector } from '../../sketchCollector';

export class ResellerinterfaceGreenmarkDoDeCollector extends SketchCollector {

    static CONFIG = {
        id: "resellerinterface_greenmark_do_de",
        name: "Resellerinterface Greenmark/do.de",
        description: "i18n.collectors.resellerinterface_greenmark_do_de.description",
        version: "0",
        website: "https://my.resellerinterface.de/finance/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1387449.jpg",
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
        entryUrl: "https://my.resellerinterface.de/finance/invoices",
    }

    constructor() {
        super(ResellerinterfaceGreenmarkDoDeCollector.CONFIG);
    }
}
