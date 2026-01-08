
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AlltricksCollector extends SketchCollector {

    static CONFIG = {
        id: "alltricks",
        name: "AllTricks",
        description: "i18n.collectors.alltricks.description",
        version: "0",
        website: "https://www.alltricks.fr/mon-compte",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/116058.jpg",
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
        loginUrl: "https://www.alltricks.fr/mon-compte",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AlltricksCollector.CONFIG);
    }
}
