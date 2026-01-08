
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GruberLogisticsCollector extends SketchCollector {

    static CONFIG = {
        id: "gruber_logistics",
        name: "Gruber Logistics",
        description: "i18n.collectors.gruber_logistics.description",
        version: "0",
        website: "https://mydesk.gruber-logistics.com/customer-invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/516930.jpg",
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
        loginUrl: "https://mydesk.gruber-logistics.com/customer-invoice",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GruberLogisticsCollector.CONFIG);
    }
}
