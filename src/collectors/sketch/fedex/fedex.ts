
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FedexCollector extends SketchCollector {

    static CONFIG = {
        id: "fedex",
        name: "FedEx",
        description: "i18n.collectors.fedex.description",
        version: "0",
        website: "https://www.fedex.com/en-us/home.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6720.jpg",
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
        entryUrl: "https://www.fedex.com/en-us/home.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FedexCollector.CONFIG);
    }
}
