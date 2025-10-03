
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SparekaCollector extends SketchCollector {

    static CONFIG = {
        id: "spareka",
        name: "Spareka",
        description: "i18n.collectors.spareka.description",
        version: "0",
        website: "https://www.spareka.fr/sales/order/history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1268958.jpg",
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
        entryUrl: "https://www.spareka.fr/sales/order/history",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SparekaCollector.CONFIG);
    }
}
