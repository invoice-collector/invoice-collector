
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Protection24BnpParibasCollector extends SketchCollector {

    static CONFIG = {
        id: "protection_24_bnp_paribas",
        name: "Protection 24 Bnp Paribas",
        description: "i18n.collectors.protection_24_bnp_paribas.description",
        version: "0",
        website: "https://eclients.protection24.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/108082.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://eclients.protection24.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Protection24BnpParibasCollector.CONFIG);
    }
}
