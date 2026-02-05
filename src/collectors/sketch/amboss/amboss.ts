
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AmbossCollector extends SketchCollector {

    static CONFIG = {
        id: "amboss",
        name: "AMBOSS",
        description: "i18n.collectors.amboss.description",
        version: "0",
        website: "https://www.miamed.de/amboss",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/39867.jpg",
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
        loginUrl: "https://www.miamed.de/amboss",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AmbossCollector.CONFIG);
    }
}
