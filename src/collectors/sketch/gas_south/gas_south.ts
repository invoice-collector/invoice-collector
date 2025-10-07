
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GasSouthCollector extends SketchCollector {

    static CONFIG = {
        id: "gas_south",
        name: "Gas South",
        description: "i18n.collectors.gas_south.description",
        version: "0",
        website: "https://manage.gassouth.com/payments/paymentdetail",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2740803.jpg",
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
        entryUrl: "https://manage.gassouth.com/payments/paymentdetail",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GasSouthCollector.CONFIG);
    }
}
