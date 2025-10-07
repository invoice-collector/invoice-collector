
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TransglobalExpressCollector extends SketchCollector {

    static CONFIG = {
        id: "transglobal_express",
        name: "Transglobal Express",
        description: "i18n.collectors.transglobal_express.description",
        version: "0",
        website: "http://www.transglobalexpress.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11435.jpg",
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
        entryUrl: "http://www.transglobalexpress.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TransglobalExpressCollector.CONFIG);
    }
}
