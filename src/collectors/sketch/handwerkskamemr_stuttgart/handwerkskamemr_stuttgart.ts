
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HandwerkskamemrStuttgartCollector extends SketchCollector {

    static CONFIG = {
        id: "handwerkskamemr_stuttgart",
        name: "Handwerkskamemr Stuttgart",
        description: "i18n.collectors.handwerkskamemr_stuttgart.description",
        version: "0",
        website: "https://www.hwk-stuttgart.de/download",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1372380.jpg",
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
        loginUrl: "https://www.hwk-stuttgart.de/download",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(HandwerkskamemrStuttgartCollector.CONFIG);
    }
}
