
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HelinetPrivatkundenCollector extends SketchCollector {

    static CONFIG = {
        id: "helinet_privatkunden",
        name: "Helinet - Privatkunden",
        description: "i18n.collectors.helinet_privatkunden.description",
        version: "0",
        website: "https://mein.helinet.de/kundenportal.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4385305.jpg",
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
        loginUrl: "https://mein.helinet.de/kundenportal.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HelinetPrivatkundenCollector.CONFIG);
    }
}
