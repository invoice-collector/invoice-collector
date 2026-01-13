
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BarclaycardPrivateNetworkCollector extends SketchCollector {

    static CONFIG = {
        id: "barclaycard_private_network",
        name: "Barclaycard Private Network",
        description: "i18n.collectors.barclaycard_private_network.description",
        version: "0",
        website: "https://barclaycard-pvn.de/user-billings.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/531896.jpg",
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
        loginUrl: "https://barclaycard-pvn.de/user-billings.do",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BarclaycardPrivateNetworkCollector.CONFIG);
    }
}
