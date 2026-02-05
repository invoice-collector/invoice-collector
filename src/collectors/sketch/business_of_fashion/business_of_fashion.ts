
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BusinessOfFashionCollector extends SketchCollector {

    static CONFIG = {
        id: "business_of_fashion",
        name: "Business of Fashion",
        description: "i18n.collectors.business_of_fashion.description",
        version: "0",
        website: "https://www.businessoffashion.com/spa#/app/account/personal/your-membership",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1501930.jpg",
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
        loginUrl: "https://www.businessoffashion.com/spa#/app/account/personal/your-membership",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BusinessOfFashionCollector.CONFIG);
    }
}
