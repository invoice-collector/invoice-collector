
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ParkingpayCollector extends SketchCollector {

    static CONFIG = {
        id: "parkingpay",
        name: "ParkingPay",
        description: "i18n.collectors.parkingpay.description",
        version: "0",
        website: "https://parkingpay.ch/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1216275.jpg",
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
        entryUrl: "https://parkingpay.ch/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ParkingpayCollector.CONFIG);
    }
}
