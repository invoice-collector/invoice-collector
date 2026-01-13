
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeHannoverEnercityCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_hannover_enercity",
        name: "Stadtwerke Hannover - enercity",
        description: "i18n.collectors.stadtwerke_hannover_enercity.description",
        version: "0",
        website: "https://serviceportal.enercity.de/action/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14816.jpg",
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
        loginUrl: "https://serviceportal.enercity.de/action/invoice",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StadtwerkeHannoverEnercityCollector.CONFIG);
    }
}
