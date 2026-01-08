
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class XOvoMedianetworksCollector extends SketchCollector {

    static CONFIG = {
        id: "x_ovo_medianetworks",
        name: "X.OVO MediaNetworks",
        description: "i18n.collectors.x_ovo_medianetworks.description",
        version: "0",
        website: "https://secure.domainpartner.net/billing/invoices/overview",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/747392.jpg",
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
        loginUrl: "https://secure.domainpartner.net/billing/invoices/overview",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(XOvoMedianetworksCollector.CONFIG);
    }
}
