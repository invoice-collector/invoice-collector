
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GoldenFrogCollector extends SketchCollector {

    static CONFIG = {
        id: "golden_frog",
        name: "Golden Frog",
        description: "i18n.collectors.golden_frog.description",
        version: "0",
        website: "https://www.goldenfrog.com/de/controlpanel/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8005.jpg",
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
        entryUrl: "https://www.goldenfrog.com/de/controlpanel/account/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GoldenFrogCollector.CONFIG);
    }
}
