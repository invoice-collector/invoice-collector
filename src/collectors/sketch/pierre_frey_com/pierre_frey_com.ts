
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PierreFreyComCollector extends SketchCollector {

    static CONFIG = {
        id: "pierre_frey_com",
        name: "Pierre Frey",
        description: "i18n.collectors.pierre_frey_com.description",
        version: "0",
        website: "https://www.pierrefrey.com/",
        logo: "https://www.pierrefrey.com/images/logo-pierre-frey.svg",
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
        loginUrl: "https://www.pierrefrey.com/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PierreFreyComCollector.CONFIG);
    }
}
