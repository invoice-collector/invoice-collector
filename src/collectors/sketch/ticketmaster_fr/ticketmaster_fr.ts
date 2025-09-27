
import { SketchCollector } from '../../sketchCollector';

export class TicketmasterFrCollector extends SketchCollector {

    static CONFIG = {
        id: "ticketmaster_fr",
        name: "TicketMaster.fr",
        description: "i18n.collectors.ticketmaster_fr.description",
        version: "0",
        website: "https://www.ticketmaster.fr/fr/identification?redirect=moncompte",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/123515.jpg",
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
        entryUrl: "https://www.ticketmaster.fr/fr/identification?redirect=moncompte",
    }

    constructor() {
        super(TicketmasterFrCollector.CONFIG);
    }
}
