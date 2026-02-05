import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SipgateCollector extends SketchCollector {

    static CONFIG = {
        id: "sipgate",
        name: "Sipgate",
        description: "i18n.collectors.sipgate.description",
        version: "0",
        website: "https://sipgate.de",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/Sipgate.svg",
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
        loginUrl: "https://login.sipgate.com/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SipgateCollector.CONFIG);
    }
}
