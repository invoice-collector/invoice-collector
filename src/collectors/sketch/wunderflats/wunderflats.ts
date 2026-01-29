
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WunderflatsCollector extends SketchCollector {

    static CONFIG = {
        id: "wunderflats",
        name: "Wunderflats",
        description: "i18n.collectors.wunderflats.description",
        version: "0",
        website: "https://wunderflats.com/en/login?redirect=%2Fen%2Fabout",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/104335.jpg",
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
        loginUrl: "https://wunderflats.com/en/login?redirect=%2Fen%2Fabout",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(WunderflatsCollector.CONFIG);
    }
}
