
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ErnstingsFamilyPartnerCollector extends SketchCollector {

    static CONFIG = {
        id: "ernstings_family_partner",
        name: "Ernstings Family Partner",
        description: "i18n.collectors.ernstings_family_partner.description",
        version: "0",
        website: "https://pvn.ernstings-family.de/user-billings.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/773290.jpg",
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
        entryUrl: "https://pvn.ernstings-family.de/user-billings.do",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ErnstingsFamilyPartnerCollector.CONFIG);
    }
}
