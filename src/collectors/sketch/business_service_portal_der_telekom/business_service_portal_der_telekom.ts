
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BusinessServicePortalDerTelekomCollector extends SketchCollector {

    static CONFIG = {
        id: "business_service_portal_der_telekom",
        name: "Business Service Portal der Telekom",
        description: "i18n.collectors.business_service_portal_der_telekom.description",
        version: "0",
        website: "https://rechnungonline-business.t-mobile.de/gk/ben_ges_dok_ueb",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7599.jpg",
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
        entryUrl: "https://rechnungonline-business.t-mobile.de/gk/ben_ges_dok_ueb",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BusinessServicePortalDerTelekomCollector.CONFIG);
    }
}
