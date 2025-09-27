
import { SketchCollector } from '../../sketchCollector';

export class SstrnCollector extends SketchCollector {

    static CONFIG = {
        id: "sstrn",
        name: "SSTRN",
        description: "i18n.collectors.sstrn.description",
        version: "0",
        website: "https://adherent.sstrn.fr/#/factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1421168.jpg",
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
        entryUrl: "https://adherent.sstrn.fr/#/factures",
    }

    constructor() {
        super(SstrnCollector.CONFIG);
    }
}
