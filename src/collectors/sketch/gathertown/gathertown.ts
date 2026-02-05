
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GathertownCollector extends SketchCollector {

    static CONFIG = {
        id: "gathertown",
        name: "GatherTown",
        description: "i18n.collectors.gathertown.description",
        version: "0",
        website: "https://app.gather.town/dashboard/AqChriOPbROCovtx/konzepthaus%20Web%20Solutions/reservations/subscription",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1941385.jpg",
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
        loginUrl: "https://app.gather.town/dashboard/AqChriOPbROCovtx/konzepthaus%20Web%20Solutions/reservations/subscription",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(GathertownCollector.CONFIG);
    }
}
