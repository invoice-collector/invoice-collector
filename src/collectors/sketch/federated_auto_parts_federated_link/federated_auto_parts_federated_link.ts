
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FederatedAutoPartsFederatedLinkCollector extends SketchCollector {

    static CONFIG = {
        id: "federated_auto_parts_federated_link",
        name: "Federated Auto Parts - Federated Link",
        description: "i18n.collectors.federated_auto_parts_federated_link.description",
        version: "0",
        website: "https://www.federatedlink.com/ecomm/ar/Invoices.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4543021.jpg",
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
        loginUrl: "https://www.federatedlink.com/ecomm/ar/Invoices.aspx",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FederatedAutoPartsFederatedLinkCollector.CONFIG);
    }
}
