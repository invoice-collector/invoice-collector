
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GeodisCollector extends SketchCollector {

    static CONFIG = {
        id: "geodis",
        name: "Geodis",
        description: "i18n.collectors.geodis.description",
        version: "0",
        website: "https://geodis.com/user/loginc",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1079846.jpg",
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
        loginUrl: "https://geodis.com/user/loginc",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GeodisCollector.CONFIG);
    }
}
