
import { SketchCollector } from '../../sketchCollector';

export class TicketmasterCollector extends SketchCollector {

    static CONFIG = {
        id: "ticketmaster",
        name: "Ticketmaster",
        description: "i18n.collectors.ticketmaster.description",
        version: "0",
        website: "https://www.ticketmaster.de/myAccount/loginRegister.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/28911.jpg",
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
        entryUrl: "https://www.ticketmaster.de/myAccount/loginRegister.php",
    }

    constructor() {
        super(TicketmasterCollector.CONFIG);
    }
}
