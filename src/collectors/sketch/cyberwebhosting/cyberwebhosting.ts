
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CyberwebhostingCollector extends SketchCollector {

    static CONFIG = {
        id: "cyberwebhosting",
        name: "Cyberwebhosting",
        description: "i18n.collectors.cyberwebhosting.description",
        version: "0",
        website: "https://cyberwebhosting.de/service/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3835.jpg",
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
        loginUrl: "https://cyberwebhosting.de/service/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CyberwebhostingCollector.CONFIG);
    }
}
