
import { SketchCollector } from '../../sketchCollector';

export class TunePayCollector extends SketchCollector {

    static CONFIG = {
        id: "tune_pay",
        name: "Tune Pay",
        description: "i18n.collectors.tune_pay.description",
        version: "0",
        website: "https://aff-tailorbrands.pay.tune.com/payment-orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1331906.jpg",
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
        entryUrl: "https://aff-tailorbrands.pay.tune.com/payment-orders",
    }

    constructor() {
        super(TunePayCollector.CONFIG);
    }
}
