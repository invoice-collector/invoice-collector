
import { SketchCollector } from '../../sketchCollector';

export class CircleKIrelandBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "circle_k_ireland_business",
        name: "CIRCLE K - Ireland Business",
        description: "i18n.collectors.circle_k_ireland_business.description",
        version: "0",
        website: "https://www.circlek.ie/business/fuel-card/login-to-your-account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/123134.jpg",
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
        entryUrl: "https://www.circlek.ie/business/fuel-card/login-to-your-account/",
    }

    constructor() {
        super(CircleKIrelandBusinessCollector.CONFIG);
    }
}
