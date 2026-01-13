
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class A2HostingPartnersCollector extends SketchCollector {

    static CONFIG = {
        id: "a2_hosting_partners",
        name: "A2 Hosting Partners",
        description: "i18n.collectors.a2_hosting_partners.description",
        version: "0",
        website: "https://affiliates.a2hosting.com/affiliates/panel.php#Payouts",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2192159.jpg",
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
        loginUrl: "https://affiliates.a2hosting.com/affiliates/panel.php#Payouts",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(A2HostingPartnersCollector.CONFIG);
    }
}
