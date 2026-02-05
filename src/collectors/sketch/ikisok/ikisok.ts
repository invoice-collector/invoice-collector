
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class IkisokCollector extends SketchCollector {

    static CONFIG = {
        id: "ikisok",
        name: "ikisok",
        description: "i18n.collectors.ikisok.description",
        version: "0",
        website: "https://www.ikiosk.de/mein-konto/einkaeufe-und-abos",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/196419.jpg",
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
        loginUrl: "https://www.ikiosk.de/mein-konto/einkaeufe-und-abos",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(IkisokCollector.CONFIG);
    }
}
