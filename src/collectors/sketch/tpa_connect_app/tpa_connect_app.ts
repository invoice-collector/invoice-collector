
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TpaConnectAppCollector extends SketchCollector {

    static CONFIG = {
        id: "tpa_connect_app",
        name: "TPA Connect App",
        description: "i18n.collectors.tpa_connect_app.description",
        version: "0",
        website: "https://portal.tpa-connect.app/webapp/#",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2854471.jpg",
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
        loginUrl: "https://portal.tpa-connect.app/webapp/#",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TpaConnectAppCollector.CONFIG);
    }
}
