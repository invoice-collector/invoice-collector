
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PrimefashionadsCollector extends SketchCollector {

    static CONFIG = {
        id: "primefashionads",
        name: "PrimeFashionAds",
        description: "i18n.collectors.primefashionads.description",
        version: "0",
        website: "https://www.primefashionads.com/partner",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/172958.jpg",
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
        entryUrl: "https://www.primefashionads.com/partner",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PrimefashionadsCollector.CONFIG);
    }
}
