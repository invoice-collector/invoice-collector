
import { SketchCollector } from '../../sketchCollector';

export class SmartbrokerPartnerprogrammCollector extends SketchCollector {

    static CONFIG = {
        id: "smartbroker_partnerprogramm",
        name: "Smartbroker Partnerprogramm",
        description: "i18n.collectors.smartbroker_partnerprogramm.description",
        version: "0",
        website: "https://partner.net.smartbroker.de/app/index.html#/account/payments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1918674.jpg",
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
        entryUrl: "https://partner.net.smartbroker.de/app/index.html#/account/payments",
    }

    constructor() {
        super(SmartbrokerPartnerprogrammCollector.CONFIG);
    }
}
