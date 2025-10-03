
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FarmaeDeCollector extends SketchCollector {

    static CONFIG = {
        id: "farmae_de",
        name: "farmae.de",
        description: "i18n.collectors.farmae_de.description",
        version: "0",
        website: "https://www.farmae.de/sales/order/history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1216682.jpg",
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
        entryUrl: "https://www.farmae.de/sales/order/history",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FarmaeDeCollector.CONFIG);
    }
}
