
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NimbleCrmCollector extends SketchCollector {

    static CONFIG = {
        id: "nimble_crm",
        name: "nimble CRM",
        description: "i18n.collectors.nimble_crm.description",
        version: "0",
        website: "https://app.nimble.com/#login/enter",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/19633.jpg",
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
        entryUrl: "https://app.nimble.com/#login/enter",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NimbleCrmCollector.CONFIG);
    }
}
