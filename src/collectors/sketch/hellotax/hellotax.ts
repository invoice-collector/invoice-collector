
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HellotaxCollector extends SketchCollector {

    static CONFIG = {
        id: "hellotax",
        name: "HelloTax",
        description: "i18n.collectors.hellotax.description",
        version: "0",
        website: "https://app.hellotax.com/en/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/133319.jpg",
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
        entryUrl: "https://app.hellotax.com/en/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HellotaxCollector.CONFIG);
    }
}
