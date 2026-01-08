
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AsosCollector extends SketchCollector {

    static CONFIG = {
        id: "asos",
        name: "Asos",
        description: "i18n.collectors.asos.description",
        version: "0",
        website: "https://my.asos.com/identity/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/116074.jpg",
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
        loginUrl: "https://my.asos.com/identity/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AsosCollector.CONFIG);
    }
}
