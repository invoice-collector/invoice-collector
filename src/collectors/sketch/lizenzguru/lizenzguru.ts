
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LizenzguruCollector extends SketchCollector {

    static CONFIG = {
        id: "lizenzguru",
        name: "Lizenzguru",
        description: "i18n.collectors.lizenzguru.description",
        version: "0",
        website: "https://lizenzguru.de/invoice_download",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1649681.jpg",
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
        loginUrl: "https://lizenzguru.de/invoice_download",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(LizenzguruCollector.CONFIG);
    }
}
