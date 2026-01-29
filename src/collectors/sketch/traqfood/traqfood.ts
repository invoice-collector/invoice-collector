
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TraqfoodCollector extends SketchCollector {

    static CONFIG = {
        id: "traqfood",
        name: "TRAQFOOD",
        description: "i18n.collectors.traqfood.description",
        version: "0",
        website: "https://www.traqfood.com/fr/?gclid=Cj0KCQiA-oqdBhDfARIsAO0TrGHbMT0Xtw7OXdFQDKtHFEVmQ7mMr-UOF33dzJ3RdP9izMSXwisJn_oaAnz1EALw_wcB",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1612034.jpg",
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
        loginUrl: "https://www.traqfood.com/fr/?gclid=Cj0KCQiA-oqdBhDfARIsAO0TrGHbMT0Xtw7OXdFQDKtHFEVmQ7mMr-UOF33dzJ3RdP9izMSXwisJn_oaAnz1EALw_wcB",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TraqfoodCollector.CONFIG);
    }
}
