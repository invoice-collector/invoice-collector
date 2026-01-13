import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class Plastit35Collector extends SketchCollector {

    static CONFIG = {
        id: "plastit_com",
        name: "Plast'It",
        description: "i18n.collectors.plastit_com.description",
        version: "0",
        website: "https://plastit35.com",
        logo: "https://www.pixenli.com/image/XmdFGIO8",
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
        loginUrl:  "https://plastit35.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Plastit35Collector.CONFIG);
    }
}
