
import { SketchCollector } from '../../sketchCollector';

export class OpalKurierLogistikCollector extends SketchCollector {

    static CONFIG = {
        id: "opal_kurier_logistik",
        name: "Opal Kurier Logistik",
        description: "i18n.collectors.opal_kurier_logistik.description",
        version: "0",
        website: "https://opal-kurier.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/428152.jpg",
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
        entryUrl: "https://opal-kurier.de/",
    }

    constructor() {
        super(OpalKurierLogistikCollector.CONFIG);
    }
}
