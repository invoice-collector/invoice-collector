
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SewanCollector extends SketchCollector {

    static CONFIG = {
        id: "sewan",
        name: "sewan",
        description: "i18n.collectors.sewan.description",
        version: "0",
        website: "https://partenaire.sewan.fr/login/?redirect_to=https://partenaire.sewan.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/940359.jpg",
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
        loginUrl: "https://partenaire.sewan.fr/login/?redirect_to=https://partenaire.sewan.fr/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SewanCollector.CONFIG);
    }
}
