
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LandbotCollector extends SketchCollector {

    static CONFIG = {
        id: "landbot",
        name: "landbot",
        description: "i18n.collectors.landbot.description",
        version: "0",
        website: "https://app.landbot.io/gui/subscription/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/492230.jpg",
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
        entryUrl: "https://app.landbot.io/gui/subscription/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LandbotCollector.CONFIG);
    }
}
