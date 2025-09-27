
import { SketchCollector } from '../../sketchCollector';

export class MobileClubCollector extends SketchCollector {

    static CONFIG = {
        id: "mobile_club",
        name: "Mobile club",
        description: "i18n.collectors.mobile_club.description",
        version: "0",
        website: "https://www.mobile.club/espace-membre/paiement-et-factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1082082.jpg",
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
        entryUrl: "https://www.mobile.club/espace-membre/paiement-et-factures",
    }

    constructor() {
        super(MobileClubCollector.CONFIG);
    }
}
