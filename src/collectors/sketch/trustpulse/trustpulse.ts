
import { SketchCollector } from '../../sketchCollector';

export class TrustpulseCollector extends SketchCollector {

    static CONFIG = {
        id: "trustpulse",
        name: "trustpulse",
        description: "i18n.collectors.trustpulse.description",
        version: "0",
        website: "https://app.trustpulse.com/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/930634.jpg",
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
        entryUrl: "https://app.trustpulse.com/login/",
    }

    constructor() {
        super(TrustpulseCollector.CONFIG);
    }
}
