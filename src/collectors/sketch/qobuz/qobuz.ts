
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class QobuzCollector extends SketchCollector {

    static CONFIG = {
        id: "qobuz",
        name: "Qobuz",
        description: "i18n.collectors.qobuz.description",
        version: "0",
        website: "https://www.qobuz.com/account/music-streaming/receipt",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/102332.jpg",
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
        loginUrl: "https://www.qobuz.com/account/music-streaming/receipt",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(QobuzCollector.CONFIG);
    }
}
