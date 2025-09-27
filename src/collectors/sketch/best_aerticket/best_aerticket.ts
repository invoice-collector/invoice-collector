
import { SketchCollector } from '../../sketchCollector';

export class BestAerticketCollector extends SketchCollector {

    static CONFIG = {
        id: "best_aerticket",
        name: "BEST AERTicket",
        description: "i18n.collectors.best_aerticket.description",
        version: "0",
        website: "https://cockpit.best-aerticket.de/home/mein-best-aer/rechnungen-und-gutschriften/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/588848.jpg",
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
        entryUrl: "https://cockpit.best-aerticket.de/home/mein-best-aer/rechnungen-und-gutschriften/",
    }

    constructor() {
        super(BestAerticketCollector.CONFIG);
    }
}
