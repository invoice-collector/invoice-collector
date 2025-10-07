
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AirtelCollector extends SketchCollector {

    static CONFIG = {
        id: "airtel",
        name: "Airtel",
        description: "i18n.collectors.airtel.description",
        version: "0",
        website: "https://www.airtel.in/personal/myaccount/home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7096.jpg",
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
        entryUrl: "https://www.airtel.in/personal/myaccount/home",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AirtelCollector.CONFIG);
    }
}
