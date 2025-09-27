
import { SketchCollector } from '../../sketchCollector';

export class TicketOnlineEdenredCollector extends SketchCollector {

    static CONFIG = {
        id: "ticket_online_edenred",
        name: "Ticket Online Edenred",
        description: "i18n.collectors.ticket_online_edenred.description",
        version: "0",
        website: "https://ticketonline.edenred.de/AcceptorManagement/Manage/TrackReimbursement.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778220.jpg",
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
        entryUrl: "https://ticketonline.edenred.de/AcceptorManagement/Manage/TrackReimbursement.aspx",
    }

    constructor() {
        super(TicketOnlineEdenredCollector.CONFIG);
    }
}
