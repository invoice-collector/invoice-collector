
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NaturmilchhofGartetalCollector extends SketchCollector {

    static CONFIG = {
        id: "naturmilchhof_gartetal",
        name: "Naturmilchhof Gartetal",
        description: "i18n.collectors.naturmilchhof_gartetal.description",
        version: "0",
        website: "https://shop.naturmilchhof.de/document/index",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1412707.jpg",
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
        loginUrl: "https://shop.naturmilchhof.de/document/index",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(NaturmilchhofGartetalCollector.CONFIG);
    }
}
