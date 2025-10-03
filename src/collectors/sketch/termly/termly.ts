
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TermlyCollector extends SketchCollector {

    static CONFIG = {
        id: "termly",
        name: "Termly",
        description: "i18n.collectors.termly.description",
        version: "0",
        website: "https://app.termly.io/dashboard/settings/billing-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1918680.jpg",
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
        entryUrl: "https://app.termly.io/dashboard/settings/billing-history",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TermlyCollector.CONFIG);
    }
}
