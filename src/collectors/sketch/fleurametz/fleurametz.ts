
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FleurametzCollector extends SketchCollector {

    static CONFIG = {
        id: "fleurametz",
        name: "FleuraMetz",
        description: "i18n.collectors.fleurametz.description",
        version: "0",
        website: "https://web.fleurametz.com/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1567591.jpg",
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
        entryUrl: "https://web.fleurametz.com/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FleurametzCollector.CONFIG);
    }
}
