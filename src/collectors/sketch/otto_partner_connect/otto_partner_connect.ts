
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OttoPartnerConnectCollector extends SketchCollector {

    static CONFIG = {
        id: "otto_partner_connect",
        name: "Otto Partner Connect",
        description: "i18n.collectors.otto_partner_connect.description",
        version: "0",
        website: "https://portal.otto.market/financials/downloads",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/672027.jpg",
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
        loginUrl: "https://portal.otto.market/financials/downloads",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(OttoPartnerConnectCollector.CONFIG);
    }
}
