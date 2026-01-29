
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MyEeMobileAndBroadbandCollector extends SketchCollector {

    static CONFIG = {
        id: "my_ee_mobile_and_broadband",
        name: "My EE - mobile and broadband",
        description: "i18n.collectors.my_ee_mobile_and_broadband.description",
        version: "0",
        website: "https://myaccount.ee.co.uk/app/top-up-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/76314.jpg",
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
        loginUrl: "https://myaccount.ee.co.uk/app/top-up-history",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MyEeMobileAndBroadbandCollector.CONFIG);
    }
}
