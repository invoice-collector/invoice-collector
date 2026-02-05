
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AdsterraPartnersCollector extends SketchCollector {

    static CONFIG = {
        id: "adsterra_partners",
        name: "Adsterra Partners",
        description: "i18n.collectors.adsterra_partners.description",
        version: "0",
        website: "https://partners.adsterra.com/finances",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/524549.jpg",
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
        loginUrl: "https://partners.adsterra.com/finances",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AdsterraPartnersCollector.CONFIG);
    }
}
