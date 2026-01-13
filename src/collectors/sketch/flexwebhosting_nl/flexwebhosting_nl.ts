
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FlexwebhostingNlCollector extends SketchCollector {

    static CONFIG = {
        id: "flexwebhosting_nl",
        name: "Flexwebhosting.nl",
        description: "i18n.collectors.flexwebhosting_nl.description",
        version: "0",
        website: "https://cp.flexwebhosting.nl/login?ruri=aHR0cHM6Ly9jcC5mbGV4d2ViaG9zdGluZy5ubC8=",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32724.jpg",
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
        loginUrl: "https://cp.flexwebhosting.nl/login?ruri=aHR0cHM6Ly9jcC5mbGV4d2ViaG9zdGluZy5ubC8=",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FlexwebhostingNlCollector.CONFIG);
    }
}
