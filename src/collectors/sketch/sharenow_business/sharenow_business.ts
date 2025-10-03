
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SharenowBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "sharenow_business",
        name: "ShareNow(Business)",
        description: "i18n.collectors.sharenow_business.description",
        version: "0",
        website: "https://www.share-now.com/business/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/189973.jpg",
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
        entryUrl: "https://www.share-now.com/business/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SharenowBusinessCollector.CONFIG);
    }
}
