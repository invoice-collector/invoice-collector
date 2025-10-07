
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ConvertapiCollector extends SketchCollector {

    static CONFIG = {
        id: "convertapi",
        name: "convertAPI",
        description: "i18n.collectors.convertapi.description",
        version: "0",
        website: "https://www.convertapi.com/a/receipts",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2161783.jpg",
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
        entryUrl: "https://www.convertapi.com/a/receipts",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ConvertapiCollector.CONFIG);
    }
}
