
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AokGesundheitspartnerserviceCollector extends SketchCollector {

    static CONFIG = {
        id: "aok_gesundheitspartnerservice",
        name: "AOK Gesundheitspartnerservice",
        description: "i18n.collectors.aok_gesundheitspartnerservice.description",
        version: "0",
        website: "https://gp.meine.aok.de/client/postbox/inbox",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4696444.jpg",
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
        loginUrl: "https://gp.meine.aok.de/client/postbox/inbox",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AokGesundheitspartnerserviceCollector.CONFIG);
    }
}
