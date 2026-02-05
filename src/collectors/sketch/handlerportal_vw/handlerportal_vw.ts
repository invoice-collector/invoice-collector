
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HandlerportalVwCollector extends SketchCollector {

    static CONFIG = {
        id: "handlerportal_vw",
        name: "Handlerportal VW",
        description: "i18n.collectors.handlerportal_vw.description",
        version: "0",
        website: "https://audi-vw-belegportal.inposia.com/inbox",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1881913.jpg",
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
        loginUrl: "https://audi-vw-belegportal.inposia.com/inbox",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(HandlerportalVwCollector.CONFIG);
    }
}
