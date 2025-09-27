
import { SketchCollector } from '../../sketchCollector';

export class LadeverbundCollector extends SketchCollector {

    static CONFIG = {
        id: "ladeverbund",
        name: "Ladeverbund +",
        description: "i18n.collectors.ladeverbund.description",
        version: "0",
        website: "https://ladeverbundplus.chargecloud.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1209211.jpg",
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
        entryUrl: "https://ladeverbundplus.chargecloud.de/",
    }

    constructor() {
        super(LadeverbundCollector.CONFIG);
    }
}
