
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CjPartnersCollector extends SketchCollector {

    static CONFIG = {
        id: "cj_partners",
        name: "CJ Partners",
        description: "i18n.collectors.cj_partners.description",
        version: "0",
        website: "https://cjaffiliate.my.site.com/publisher/s/invoice/Invoice__c/00B6O00000BN5LqUAL",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2161970.jpg",
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
        loginUrl: "https://cjaffiliate.my.site.com/publisher/s/invoice/Invoice__c/00B6O00000BN5LqUAL",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CjPartnersCollector.CONFIG);
    }
}
