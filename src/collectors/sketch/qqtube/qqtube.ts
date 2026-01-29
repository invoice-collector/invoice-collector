
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class QqtubeCollector extends SketchCollector {

    static CONFIG = {
        id: "qqtube",
        name: "QQTube",
        description: "i18n.collectors.qqtube.description",
        version: "0",
        website: "https://www.qqtube.com/order-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/81310.jpg",
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
        loginUrl: "https://www.qqtube.com/order-history",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(QqtubeCollector.CONFIG);
    }
}
