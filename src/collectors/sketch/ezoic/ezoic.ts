
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EzoicCollector extends SketchCollector {

    static CONFIG = {
        id: "ezoic",
        name: "Ezoic",
        description: "i18n.collectors.ezoic.description",
        version: "0",
        website: "https://pubdash.ezoic.com/account/payments/subscriptions",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2730015.jpg",
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
        entryUrl: "https://pubdash.ezoic.com/account/payments/subscriptions",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EzoicCollector.CONFIG);
    }
}
