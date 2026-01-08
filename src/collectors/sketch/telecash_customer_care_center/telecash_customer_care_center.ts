
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TelecashCustomerCareCenterCollector extends SketchCollector {

    static CONFIG = {
        id: "telecash_customer_care_center",
        name: "Telecash Customer Care Center",
        description: "i18n.collectors.telecash_customer_care_center.description",
        version: "0",
        website: "https://my.telecash.de/de/DownloadCenter/index",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1378822.jpg",
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
        loginUrl: "https://my.telecash.de/de/DownloadCenter/index",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TelecashCustomerCareCenterCollector.CONFIG);
    }
}
