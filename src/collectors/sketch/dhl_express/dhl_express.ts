
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DhlExpressCollector extends SketchCollector {

    static CONFIG = {
        id: "dhl_express",
        name: "DHL - Express",
        description: "i18n.collectors.dhl_express.description",
        version: "0",
        website: "https://mydhl.express.dhl/de/en/auth/login.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/500.jpg",
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
        entryUrl: "https://mydhl.express.dhl/de/en/auth/login.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DhlExpressCollector.CONFIG);
    }
}
