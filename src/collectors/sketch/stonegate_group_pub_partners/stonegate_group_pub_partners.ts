
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StonegateGroupPubPartnersCollector extends SketchCollector {

    static CONFIG = {
        id: "stonegate_group_pub_partners",
        name: "Stonegate Group - Pub Partners",
        description: "i18n.collectors.stonegate_group_pub_partners.description",
        version: "0",
        website: "https://www.stonegatepubpartners.co.uk/sites/myaccount/my-pub/Pages/invoices-documents.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1276126.jpg",
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
        loginUrl: "https://www.stonegatepubpartners.co.uk/sites/myaccount/my-pub/Pages/invoices-documents.aspx",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(StonegateGroupPubPartnersCollector.CONFIG);
    }
}
