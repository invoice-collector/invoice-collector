
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SonnenCollector extends SketchCollector {

    static CONFIG = {
        id: "sonnen",
        name: "Sonnen",
        description: "i18n.collectors.sonnen.description",
        version: "0",
        website: "https://my.sonnen.de/documents/invoices?lang=de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1468176.jpg",
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
        loginUrl: "https://my.sonnen.de/documents/invoices?lang=de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SonnenCollector.CONFIG);
    }
}
