
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GuimbalSupportCollector extends SketchCollector {

    static CONFIG = {
        id: "guimbal_support",
        name: "Guimbal Support",
        description: "i18n.collectors.guimbal_support.description",
        version: "0",
        website: "https://support.guimbal.com/#/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/102632.jpg",
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
        entryUrl: "https://support.guimbal.com/#/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GuimbalSupportCollector.CONFIG);
    }
}
