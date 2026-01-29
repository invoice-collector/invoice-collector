
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HightailCollector extends SketchCollector {

    static CONFIG = {
        id: "hightail",
        name: "Hightail",
        description: "i18n.collectors.hightail.description",
        version: "0",
        website: "https://spaces.hightail.com/dashboard/news",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/213137.jpg",
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
        loginUrl: "https://spaces.hightail.com/dashboard/news",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(HightailCollector.CONFIG);
    }
}
