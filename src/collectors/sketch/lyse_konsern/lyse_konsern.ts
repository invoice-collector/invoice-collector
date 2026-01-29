
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LyseKonsernCollector extends SketchCollector {

    static CONFIG = {
        id: "lyse_konsern",
        name: "Lyse Konsern",
        description: "i18n.collectors.lyse_konsern.description",
        version: "0",
        website: "http://www.lysekonsern.no",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8988.jpg",
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
        loginUrl: "http://www.lysekonsern.no",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(LyseKonsernCollector.CONFIG);
    }
}
