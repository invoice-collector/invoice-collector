
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AdserviveASCollector extends SketchCollector {

    static CONFIG = {
        id: "adservive_a_s",
        name: "Adservive A/S",
        description: "i18n.collectors.adservive_a_s.description",
        version: "0",
        website: "http://publisher.adservice.com/cgi-bin/publisher/payments.pl?p1=finance",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/103360.jpg",
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
        loginUrl: "http://publisher.adservice.com/cgi-bin/publisher/payments.pl?p1=finance",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AdserviveASCollector.CONFIG);
    }
}
