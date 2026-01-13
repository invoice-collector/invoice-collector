
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeKaltenkirchenCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_kaltenkirchen",
        name: "Stadtwerke Kaltenkirchen",
        description: "i18n.collectors.stadtwerke_kaltenkirchen.description",
        version: "0",
        website: "https://mein.kakiconnect.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/762154.jpg",
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
        loginUrl: "https://mein.kakiconnect.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StadtwerkeKaltenkirchenCollector.CONFIG);
    }
}
