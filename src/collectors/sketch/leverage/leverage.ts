
import { SketchCollector } from '../../sketchCollector';

export class LeverageCollector extends SketchCollector {

    static CONFIG = {
        id: "leverage",
        name: "Leverage",
        description: "i18n.collectors.leverage.description",
        version: "0",
        website: "https://leverage.immo/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4417264.jpg",
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
        entryUrl: "https://leverage.immo/login",
    }

    constructor() {
        super(LeverageCollector.CONFIG);
    }
}
