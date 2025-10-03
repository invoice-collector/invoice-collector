
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SipcallCollector extends SketchCollector {

    static CONFIG = {
        id: "sipcall",
        name: "sipcall",
        description: "i18n.collectors.sipcall.description",
        version: "0",
        website: "https://my.sipcall.ch/customer/payment/history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/78119.jpg",
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
        entryUrl: "https://my.sipcall.ch/customer/payment/history",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SipcallCollector.CONFIG);
    }
}
