
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RakutenAdvertisingCollector extends SketchCollector {

    static CONFIG = {
        id: "rakuten_advertising",
        name: "Rakuten Advertising",
        description: "i18n.collectors.rakuten_advertising.description",
        version: "0",
        website: "https://publisher.rakutenadvertising.com/reports/payments/overview",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2669861.jpg",
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
        loginUrl: "https://publisher.rakutenadvertising.com/reports/payments/overview",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(RakutenAdvertisingCollector.CONFIG);
    }
}
