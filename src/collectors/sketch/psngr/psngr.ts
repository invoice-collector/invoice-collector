
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PsngrCollector extends SketchCollector {

    static CONFIG = {
        id: "psngr",
        name: "Psngr",
        description: "i18n.collectors.psngr.description",
        version: "0",
        website: "https://psngr.co/dashboard/billing/overview",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1207825.jpg",
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
        entryUrl: "https://psngr.co/dashboard/billing/overview",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PsngrCollector.CONFIG);
    }
}
