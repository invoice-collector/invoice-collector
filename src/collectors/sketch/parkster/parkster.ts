
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ParksterCollector extends SketchCollector {

    static CONFIG = {
        id: "parkster",
        name: "Parkster",
        description: "i18n.collectors.parkster.description",
        version: "0",
        website: "https://www.parkster.com/mypages/paymentorders?page=1&size=10",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/883245.jpg",
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
        entryUrl: "https://www.parkster.com/mypages/paymentorders?page=1&size=10",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ParksterCollector.CONFIG);
    }
}
