
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ToomCollector extends SketchCollector {

    static CONFIG = {
        id: "toom",
        name: "Toom",
        description: "i18n.collectors.toom.description",
        version: "0",
        website: "https://toom.de/warenkorb",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/123579.jpg",
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
        loginUrl: "https://toom.de/warenkorb",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ToomCollector.CONFIG);
    }
}
