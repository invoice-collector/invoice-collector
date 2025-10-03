
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BilikCollector extends SketchCollector {

    static CONFIG = {
        id: "bilik",
        name: "BILIK",
        description: "i18n.collectors.bilik.description",
        version: "0",
        website: "https://pro.bilik.fr/factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1052829.jpg",
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
        entryUrl: "https://pro.bilik.fr/factures",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BilikCollector.CONFIG);
    }
}
