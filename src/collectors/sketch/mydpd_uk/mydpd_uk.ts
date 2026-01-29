
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MydpdUkCollector extends SketchCollector {

    static CONFIG = {
        id: "mydpd_uk",
        name: "MyDPD UK",
        description: "i18n.collectors.mydpd_uk.description",
        version: "0",
        website: "https://www.dpd.co.uk/umslogon/public/doLogon.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/117395.jpg",
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
        loginUrl: "https://www.dpd.co.uk/umslogon/public/doLogon.do",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MydpdUkCollector.CONFIG);
    }
}
