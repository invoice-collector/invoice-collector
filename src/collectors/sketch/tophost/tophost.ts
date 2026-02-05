
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TophostCollector extends SketchCollector {

    static CONFIG = {
        id: "tophost",
        name: "Tophost",
        description: "i18n.collectors.tophost.description",
        version: "0",
        website: "https://www.tophost.it/co/accesso",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8737.jpg",
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
        loginUrl: "https://www.tophost.it/co/accesso",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TophostCollector.CONFIG);
    }
}
