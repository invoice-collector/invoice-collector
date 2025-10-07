
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AdamCollector extends SketchCollector {

    static CONFIG = {
        id: "adam",
        name: "Adam",
        description: "i18n.collectors.adam.description",
        version: "0",
        website: "https://myadam.io/profitability/dashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4327194.jpg",
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
        entryUrl: "https://myadam.io/profitability/dashboard",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AdamCollector.CONFIG);
    }
}
