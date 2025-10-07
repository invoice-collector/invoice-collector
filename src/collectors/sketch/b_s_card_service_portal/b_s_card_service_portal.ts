
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BSCardServicePortalCollector extends SketchCollector {

    static CONFIG = {
        id: "b_s_card_service_portal",
        name: "B+S Card Service Portal",
        description: "i18n.collectors.b_s_card_service_portal.description",
        version: "0",
        website: "https://login.pay1.de/auth/realms/financegate/protocol/openid-connect/auth?response_type=code&client_id=pmi&redirect_uri=https://pmi.pay1.de/merchants/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/22489.jpg",
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
        entryUrl: "https://login.pay1.de/auth/realms/financegate/protocol/openid-connect/auth?response_type=code&client_id=pmi&redirect_uri=https://pmi.pay1.de/merchants/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BSCardServicePortalCollector.CONFIG);
    }
}
