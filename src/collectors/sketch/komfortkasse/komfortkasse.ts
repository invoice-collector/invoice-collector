
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KomfortkasseCollector extends SketchCollector {

    static CONFIG = {
        id: "komfortkasse",
        name: "komfortkasse",
        description: "i18n.collectors.komfortkasse.description",
        version: "0",
        website: "https://ssl.komfortkasse.eu/dealer/invoices.jsf",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/56592.jpg",
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
        loginUrl: "https://ssl.komfortkasse.eu/dealer/invoices.jsf",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KomfortkasseCollector.CONFIG);
    }
}
