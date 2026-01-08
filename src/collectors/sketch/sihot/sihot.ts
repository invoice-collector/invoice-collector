
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SihotCollector extends SketchCollector {

    static CONFIG = {
        id: "sihot",
        name: "SIHOT",
        description: "i18n.collectors.sihot.description",
        version: "0",
        website: "https://pms.sihot.com/0063/SIHOTHTML/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/737491.jpg",
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
        loginUrl: "https://pms.sihot.com/0063/SIHOTHTML/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SihotCollector.CONFIG);
    }
}
