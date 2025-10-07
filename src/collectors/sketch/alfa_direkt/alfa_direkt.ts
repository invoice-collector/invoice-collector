
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AlfaDirektCollector extends SketchCollector {

    static CONFIG = {
        id: "alfa_direkt",
        name: "Alfa Direkt",
        description: "i18n.collectors.alfa_direkt.description",
        version: "0",
        website: "https://www.alfa-direkt.de/sales/order/history/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/779730.jpg",
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
        entryUrl: "https://www.alfa-direkt.de/sales/order/history/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AlfaDirektCollector.CONFIG);
    }
}
