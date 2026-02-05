
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MoebelDeHandlerportalCollector extends SketchCollector {

    static CONFIG = {
        id: "moebel_de_handlerportal",
        name: "moebel.de - Handlerportal",
        description: "i18n.collectors.moebel_de_handlerportal.description",
        version: "0",
        website: "https://www.moebel.de/portalispartner/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/79444.jpg",
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
        loginUrl: "https://www.moebel.de/portalispartner/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MoebelDeHandlerportalCollector.CONFIG);
    }
}
