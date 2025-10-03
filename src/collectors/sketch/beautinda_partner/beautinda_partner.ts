
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BeautindaPartnerCollector extends SketchCollector {

    static CONFIG = {
        id: "beautinda_partner",
        name: "Beautinda - Partner",
        description: "i18n.collectors.beautinda_partner.description",
        version: "0",
        website: "https://pro.beautinda.de/settings/finance/data-export",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4547036.jpg",
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
        entryUrl: "https://pro.beautinda.de/settings/finance/data-export",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BeautindaPartnerCollector.CONFIG);
    }
}
