
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OnlineprintersDeCollector extends SketchCollector {

    static CONFIG = {
        id: "onlineprinters_de",
        name: "Onlineprinters (.de)",
        description: "i18n.collectors.onlineprinters_de.description",
        version: "0",
        website: "https://www.onlineprinters.de/websale8/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777333.jpg",
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
        loginUrl: "https://www.onlineprinters.de/websale8/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(OnlineprintersDeCollector.CONFIG);
    }
}
