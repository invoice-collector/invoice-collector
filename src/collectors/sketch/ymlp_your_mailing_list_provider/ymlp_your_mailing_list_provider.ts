
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class YmlpYourMailingListProviderCollector extends SketchCollector {

    static CONFIG = {
        id: "ymlp_your_mailing_list_provider",
        name: "YMLP - Your Mailing List Provider",
        description: "i18n.collectors.ymlp_your_mailing_list_provider.description",
        version: "0",
        website: "https://www.ymlp.com/app/payments.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777424.jpg",
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
        loginUrl: "https://www.ymlp.com/app/payments.php",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(YmlpYourMailingListProviderCollector.CONFIG);
    }
}
