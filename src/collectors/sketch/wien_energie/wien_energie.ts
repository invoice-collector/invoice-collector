
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WienEnergieCollector extends SketchCollector {

    static CONFIG = {
        id: "wien_energie",
        name: "Wien Energie",
        description: "i18n.collectors.wien_energie.description",
        version: "0",
        website: "https://service.wienenergie.at",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3499.jpg",
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
        loginUrl: "https://service.wienenergie.at",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WienEnergieCollector.CONFIG);
    }
}
