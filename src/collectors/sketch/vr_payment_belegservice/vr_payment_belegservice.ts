
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VrPaymentBelegserviceCollector extends SketchCollector {

    static CONFIG = {
        id: "vr_payment_belegservice",
        name: "VR-Payment Belegservice",
        description: "i18n.collectors.vr_payment_belegservice.description",
        version: "0",
        website: "https://vr-payment.belegservice.de/download",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/246208.jpg",
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
        entryUrl: "https://vr-payment.belegservice.de/download",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VrPaymentBelegserviceCollector.CONFIG);
    }
}
