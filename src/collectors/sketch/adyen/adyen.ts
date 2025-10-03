
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AdyenCollector extends SketchCollector {

    static CONFIG = {
        id: "adyen",
        name: "adyen",
        description: "i18n.collectors.adyen.description",
        version: "0",
        website: "https://ca-live.adyen.com/ca/ca/login.shtml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/47986.jpg",
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
        entryUrl: "https://ca-live.adyen.com/ca/ca/login.shtml",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AdyenCollector.CONFIG);
    }
}
