
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OrlandoUtilitiesCommissionOucCollector extends SketchCollector {

    static CONFIG = {
        id: "orlando_utilities_commission_ouc",
        name: "Orlando Utilities Commission - OUC",
        description: "i18n.collectors.orlando_utilities_commission_ouc.description",
        version: "0",
        website: "https://my.ouc.com/myouc/AccountSummary_Home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2723384.jpg",
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
        loginUrl: "https://my.ouc.com/myouc/AccountSummary_Home",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(OrlandoUtilitiesCommissionOucCollector.CONFIG);
    }
}
