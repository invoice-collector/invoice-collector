
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AuxinumCollector extends SketchCollector {

    static CONFIG = {
        id: "auxinum",
        name: "Auxinum",
        description: "i18n.collectors.auxinum.description",
        version: "0",
        website: "https://auxinum.tq-onis.de/Intern/Balance/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4418486.jpg",
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
        loginUrl: "https://auxinum.tq-onis.de/Intern/Balance/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AuxinumCollector.CONFIG);
    }
}
