
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BikeleasingBlsCollector extends SketchCollector {

    static CONFIG = {
        id: "bikeleasing_bls",
        name: "Bikeleasing BLS",
        description: "i18n.collectors.bikeleasing_bls.description",
        version: "0",
        website: "https://portal.bikeleasing-service.de/user/retailer/credits",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2727688.jpg",
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
        loginUrl: "https://portal.bikeleasing-service.de/user/retailer/credits",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BikeleasingBlsCollector.CONFIG);
    }
}
