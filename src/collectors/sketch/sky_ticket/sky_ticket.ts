
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SkyTicketCollector extends SketchCollector {

    static CONFIG = {
        id: "sky_ticket",
        name: "Sky Ticket",
        description: "i18n.collectors.sky_ticket.description",
        version: "0",
        website: "https://skyticket.sky.de/scrm/storm/onko/boundary/showAccountsRH.do?forward_success=/scrm/cms/account_abrechnungen-uebersicht.jsp&months=6",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/34690.jpg",
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
        entryUrl: "https://skyticket.sky.de/scrm/storm/onko/boundary/showAccountsRH.do?forward_success=/scrm/cms/account_abrechnungen-uebersicht.jsp&months=6",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SkyTicketCollector.CONFIG);
    }
}
