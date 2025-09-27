
import { SketchCollector } from '../../sketchCollector';

export class LegalstartCollector extends SketchCollector {

    static CONFIG = {
        id: "legalstart",
        name: "Legalstart",
        description: "i18n.collectors.legalstart.description",
        version: "0",
        website: "https://www.legalstart.fr/compte/mes-factures/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/762267.jpg",
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
        entryUrl: "https://www.legalstart.fr/compte/mes-factures/",
    }

    constructor() {
        super(LegalstartCollector.CONFIG);
    }
}
