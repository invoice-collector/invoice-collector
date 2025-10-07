
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TransglobalExpressUkCollector extends SketchCollector {

    static CONFIG = {
        id: "transglobal_express_uk",
        name: "Transglobal Express UK",
        description: "i18n.collectors.transglobal_express_uk.description",
        version: "0",
        website: "https://www.transglobalexpress.co.uk/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/109072.jpg",
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
        entryUrl: "https://www.transglobalexpress.co.uk/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TransglobalExpressUkCollector.CONFIG);
    }
}
