
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ColorfulStandardCollector extends SketchCollector {

    static CONFIG = {
        id: "colorful_standard",
        name: "colorful standard",
        description: "i18n.collectors.colorful_standard.description",
        version: "0",
        website: "https://colorfulstandard.spysystem.dk/b2b#tab=invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777320.jpg",
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
        loginUrl: "https://colorfulstandard.spysystem.dk/b2b#tab=invoices",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ColorfulStandardCollector.CONFIG);
    }
}
