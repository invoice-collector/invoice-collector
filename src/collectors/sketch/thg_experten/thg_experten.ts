
import { SketchCollector } from '../../sketchCollector';

export class ThgExpertenCollector extends SketchCollector {

    static CONFIG = {
        id: "thg_experten",
        name: "THG-Experten",
        description: "i18n.collectors.thg_experten.description",
        version: "0",
        website: "https://thg-experten.de/transactions",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2513866.jpg",
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
        entryUrl: "https://thg-experten.de/transactions",
    }

    constructor() {
        super(ThgExpertenCollector.CONFIG);
    }
}
