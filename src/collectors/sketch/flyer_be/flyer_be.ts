
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FlyerBeCollector extends SketchCollector {

    static CONFIG = {
        id: "flyer_be",
        name: "Flyer.be",
        description: "i18n.collectors.flyer_be.description",
        version: "0",
        website: "https://www.flyer.be/benl/myprintconnect/login?return=myprintconnect",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32358.jpg",
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
        loginUrl: "https://www.flyer.be/benl/myprintconnect/login?return=myprintconnect",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FlyerBeCollector.CONFIG);
    }
}
