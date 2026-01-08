
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AlternateBusinessBelgiumCollector extends SketchCollector {

    static CONFIG = {
        id: "alternate_business_belgium",
        name: "Alternate Business Belgium",
        description: "i18n.collectors.alternate_business_belgium.description",
        version: "0",
        website: "https://business.alternate.be/customerAccountOrders.xhtml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1347039.jpg",
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
        loginUrl: "https://business.alternate.be/customerAccountOrders.xhtml",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AlternateBusinessBelgiumCollector.CONFIG);
    }
}
