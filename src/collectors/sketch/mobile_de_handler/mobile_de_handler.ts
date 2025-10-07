
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MobileDeHandlerCollector extends SketchCollector {

    static CONFIG = {
        id: "mobile_de_handler",
        name: "Mobile.de - Handler",
        description: "i18n.collectors.mobile_de_handler.description",
        version: "0",
        website: "https://handel.mobile.de/rechnungen/vorherige",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4189083.jpg",
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
        entryUrl: "https://handel.mobile.de/rechnungen/vorherige",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MobileDeHandlerCollector.CONFIG);
    }
}
