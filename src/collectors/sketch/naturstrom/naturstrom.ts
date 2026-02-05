
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NaturstromCollector extends SketchCollector {

    static CONFIG = {
        id: "naturstrom",
        name: "Naturstrom",
        description: "i18n.collectors.naturstrom.description",
        version: "0",
        website: "https://kundenservice.naturstrom.de/naturstrom/#/loginRegistration",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/22564.jpg",
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
        loginUrl: "https://kundenservice.naturstrom.de/naturstrom/#/loginRegistration",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(NaturstromCollector.CONFIG);
    }
}
