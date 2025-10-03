
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MijnHostingPartnerCollector extends SketchCollector {

    static CONFIG = {
        id: "mijn_hosting_partner",
        name: "Mijn Hosting Partner",
        description: "i18n.collectors.mijn_hosting_partner.description",
        version: "0",
        website: "https://www.mijnhostingpartner.nl/client/clientarea.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32362.jpg",
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
        entryUrl: "https://www.mijnhostingpartner.nl/client/clientarea.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MijnHostingPartnerCollector.CONFIG);
    }
}
