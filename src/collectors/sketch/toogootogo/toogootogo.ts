
import { SketchCollector } from '../../sketchCollector';

export class ToogootogoCollector extends SketchCollector {

    static CONFIG = {
        id: "toogootogo",
        name: "toogootogo",
        description: "i18n.collectors.toogootogo.description",
        version: "0",
        website: "https://toogoodtogo.fr/fr/business/factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/534311.jpg",
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
        entryUrl: "https://toogoodtogo.fr/fr/business/factures",
    }

    constructor() {
        super(ToogootogoCollector.CONFIG);
    }
}
