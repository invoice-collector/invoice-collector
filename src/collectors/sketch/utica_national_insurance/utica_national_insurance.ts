
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class UticaNationalInsuranceCollector extends SketchCollector {

    static CONFIG = {
        id: "utica_national_insurance",
        name: "Utica National Insurance",
        description: "i18n.collectors.utica_national_insurance.description",
        version: "0",
        website: "https://myaccount.uticanational.com/ccc-portal/user/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2385148.jpg",
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
        loginUrl: "https://myaccount.uticanational.com/ccc-portal/user/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(UticaNationalInsuranceCollector.CONFIG);
    }
}
