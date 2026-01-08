
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AutarcCollector extends SketchCollector {

    static CONFIG = {
        id: "autarc",
        name: "Autarc",
        description: "i18n.collectors.autarc.description",
        version: "0",
        website: "https://app2.autarc.energy/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4466177.jpg",
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
        loginUrl: "https://app2.autarc.energy/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AutarcCollector.CONFIG);
    }
}
