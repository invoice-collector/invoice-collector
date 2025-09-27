
import { SketchCollector } from '../../sketchCollector';

export class LmcStoreFrCollector extends SketchCollector {

    static CONFIG = {
        id: "lmc_store_fr",
        name: "LMC Store FR",
        description: "i18n.collectors.lmc_store_fr.description",
        version: "0",
        website: "https://www.lmcstore.com/fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778263.jpg",
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
        entryUrl: "https://www.lmcstore.com/fr/",
    }

    constructor() {
        super(LmcStoreFrCollector.CONFIG);
    }
}
