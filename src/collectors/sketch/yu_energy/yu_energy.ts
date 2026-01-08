
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class YuEnergyCollector extends SketchCollector {

    static CONFIG = {
        id: "yu_energy",
        name: "Yu Energy",
        description: "i18n.collectors.yu_energy.description",
        version: "0",
        website: "https://myaccount.yuenergy.co.uk/MyAccount/s/account-overview",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4545941.jpg",
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
        loginUrl: "https://myaccount.yuenergy.co.uk/MyAccount/s/account-overview",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(YuEnergyCollector.CONFIG);
    }
}
