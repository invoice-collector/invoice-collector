
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SgbEnergieCollector extends SketchCollector {

    static CONFIG = {
        id: "sgb_energie",
        name: "SGB Energie",
        description: "i18n.collectors.sgb_energie.description",
        version: "0",
        website: "https://kundenportal.sgb-energie.de/index.php?page=invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4417802.jpg",
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
        entryUrl: "https://kundenportal.sgb-energie.de/index.php?page=invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SgbEnergieCollector.CONFIG);
    }
}
