
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CaptraderPartnerCollector extends SketchCollector {

    static CONFIG = {
        id: "captrader_partner",
        name: "Captrader Partner",
        description: "i18n.collectors.captrader_partner.description",
        version: "0",
        website: "https://www.clientam.com/AccountManagement/AmAuthentication?action=Statements",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2519918.jpg",
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
        entryUrl: "https://www.clientam.com/AccountManagement/AmAuthentication?action=Statements",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CaptraderPartnerCollector.CONFIG);
    }
}
