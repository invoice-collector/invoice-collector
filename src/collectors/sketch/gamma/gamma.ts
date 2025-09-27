
import { SketchCollector } from '../../sketchCollector';

export class GammaCollector extends SketchCollector {

    static CONFIG = {
        id: "gamma",
        name: "Gamma",
        description: "i18n.collectors.gamma.description",
        version: "0",
        website: "https://rechnung.hfo-telecom.de/Portal1/Rechnungen.cms?ActiveID=1013",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2128532.jpg",
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
        entryUrl: "https://rechnung.hfo-telecom.de/Portal1/Rechnungen.cms?ActiveID=1013",
    }

    constructor() {
        super(GammaCollector.CONFIG);
    }
}
