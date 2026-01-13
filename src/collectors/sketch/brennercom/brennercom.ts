
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BrennercomCollector extends SketchCollector {

    static CONFIG = {
        id: "brennercom",
        name: "Brennercom",
        description: "i18n.collectors.brennercom.description",
        version: "0",
        website: "https://mybcom.brennercom.it/de/mybcom/online-rechnung/rechnungen/111-0.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2732662.jpg",
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
        loginUrl: "https://mybcom.brennercom.it/de/mybcom/online-rechnung/rechnungen/111-0.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BrennercomCollector.CONFIG);
    }
}
