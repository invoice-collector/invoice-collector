
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BullguardCollector extends SketchCollector {

    static CONFIG = {
        id: "bullguard",
        name: "BullGuard",
        description: "i18n.collectors.bullguard.description",
        version: "0",
        website: "https://myaccount.bullguard.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4685.jpg",
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
        entryUrl: "https://myaccount.bullguard.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BullguardCollector.CONFIG);
    }
}
