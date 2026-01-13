
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BtBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "bt_business",
        name: "BT - Business",
        description: "i18n.collectors.bt_business.description",
        version: "0",
        website: "https://secure.business.bt.com/Account/LoginRedirect.aspx?tabId=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8492.jpg",
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
        loginUrl: "https://secure.business.bt.com/Account/LoginRedirect.aspx?tabId=1",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BtBusinessCollector.CONFIG);
    }
}
