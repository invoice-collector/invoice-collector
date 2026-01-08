
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MarketpringCollector extends SketchCollector {

    static CONFIG = {
        id: "marketpring",
        name: "MarketPring",
        description: "i18n.collectors.marketpring.description",
        version: "0",
        website: "https://app.marketprint.de/api/invoice/5044959543562",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1293769.jpg",
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
        loginUrl: "https://app.marketprint.de/api/invoice/5044959543562",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MarketpringCollector.CONFIG);
    }
}
