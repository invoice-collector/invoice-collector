
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OlarkCollector extends SketchCollector {

    static CONFIG = {
        id: "olark",
        name: "olark",
        description: "i18n.collectors.olark.description",
        version: "0",
        website: "https://www.olark.com/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6599.jpg",
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
        entryUrl: "https://www.olark.com/invoice",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OlarkCollector.CONFIG);
    }
}
