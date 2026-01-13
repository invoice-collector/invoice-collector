
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OkodorfBrodowinCollector extends SketchCollector {

    static CONFIG = {
        id: "okodorf_brodowin",
        name: "Okodorf Brodowin",
        description: "i18n.collectors.okodorf_brodowin.description",
        version: "0",
        website: "https://shop.brodowin.de/logon.html?locale=de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/121991.jpg",
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
        loginUrl: "https://shop.brodowin.de/logon.html?locale=de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OkodorfBrodowinCollector.CONFIG);
    }
}
