
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeKaiserslauternCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_kaiserslautern",
        name: "stadtwerke-kaiserslautern",
        description: "i18n.collectors.stadtwerke_kaiserslautern.description",
        version: "0",
        website: "https://www.meineswk.de/Postfach",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/211152.jpg",
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
        loginUrl: "https://www.meineswk.de/Postfach",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StadtwerkeKaiserslauternCollector.CONFIG);
    }
}
