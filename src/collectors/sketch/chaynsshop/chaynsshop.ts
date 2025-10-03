
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ChaynsshopCollector extends SketchCollector {

    static CONFIG = {
        id: "chaynsshop",
        name: "ChaynsShop",
        description: "i18n.collectors.chaynsshop.description",
        version: "0",
        website: "https://die-einkaufsbummler.chayns.net/tapp/258527?v=0",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/240035.jpg",
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
        entryUrl: "https://die-einkaufsbummler.chayns.net/tapp/258527?v=0",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ChaynsshopCollector.CONFIG);
    }
}
