
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TlaFrischeserviceCollector extends SketchCollector {

    static CONFIG = {
        id: "tla_frischeservice",
        name: "TLA Frischeservice",
        description: "i18n.collectors.tla_frischeservice.description",
        version: "0",
        website: "https://tla-frischeservice.de/account/order",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1471267.jpg",
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
        entryUrl: "https://tla-frischeservice.de/account/order",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TlaFrischeserviceCollector.CONFIG);
    }
}
