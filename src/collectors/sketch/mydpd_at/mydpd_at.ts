
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MydpdAtCollector extends SketchCollector {

    static CONFIG = {
        id: "mydpd_at",
        name: "mydpd.at",
        description: "i18n.collectors.mydpd_at.description",
        version: "0",
        website: "https://www.mydpd.at/meine-pakete",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/391934.jpg",
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
        loginUrl: "https://www.mydpd.at/meine-pakete",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MydpdAtCollector.CONFIG);
    }
}
