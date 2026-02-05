
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TailorbrandsCollector extends SketchCollector {

    static CONFIG = {
        id: "tailorbrands",
        name: "tailorbrands",
        description: "i18n.collectors.tailorbrands.description",
        version: "0",
        website: "https://tailorbrands.hasoffers.com/publisher/#!/dashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1980318.jpg",
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
        loginUrl: "https://tailorbrands.hasoffers.com/publisher/#!/dashboard",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TailorbrandsCollector.CONFIG);
    }
}
