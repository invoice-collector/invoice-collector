
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GftCollector extends SketchCollector {

    static CONFIG = {
        id: "gft",
        name: "GFT",
        description: "i18n.collectors.gft.description",
        version: "0",
        website: "https://www.gft-eg.de/de/startseite.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/779116.jpg",
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
        loginUrl: "https://www.gft-eg.de/de/startseite.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(GftCollector.CONFIG);
    }
}
