
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MegaEgCollector extends SketchCollector {

    static CONFIG = {
        id: "mega_eg",
        name: "MEGA eG",
        description: "i18n.collectors.mega_eg.description",
        version: "0",
        website: "https://shop.mega.de/store/mega/de/EUR/my-account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1264460.jpg",
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
        loginUrl: "https://shop.mega.de/store/mega/de/EUR/my-account/invoices",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MegaEgCollector.CONFIG);
    }
}
