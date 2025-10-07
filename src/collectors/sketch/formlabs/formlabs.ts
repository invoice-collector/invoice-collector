
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FormlabsCollector extends SketchCollector {

    static CONFIG = {
        id: "formlabs",
        name: "Formlabs",
        description: "i18n.collectors.formlabs.description",
        version: "0",
        website: "https://checkout.formlabs.com/de_de/sales/order/history/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2727695.jpg",
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
        entryUrl: "https://checkout.formlabs.com/de_de/sales/order/history/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FormlabsCollector.CONFIG);
    }
}
