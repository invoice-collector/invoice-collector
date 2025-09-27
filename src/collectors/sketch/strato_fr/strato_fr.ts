
import { SketchCollector } from '../../sketchCollector';

export class StratoFrCollector extends SketchCollector {

    static CONFIG = {
        id: "strato_fr",
        name: "STRATO.fr",
        description: "i18n.collectors.strato_fr.description",
        version: "0",
        website: "https://www.strato.es/apps/CustomerService#/skl",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20519.jpg",
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
        entryUrl: "https://www.strato.es/apps/CustomerService#/skl",
    }

    constructor() {
        super(StratoFrCollector.CONFIG);
    }
}
