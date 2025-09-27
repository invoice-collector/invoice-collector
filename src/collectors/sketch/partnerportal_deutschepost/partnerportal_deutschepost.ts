
import { SketchCollector } from '../../sketchCollector';

export class PartnerportalDeutschepostCollector extends SketchCollector {

    static CONFIG = {
        id: "partnerportal_deutschepost",
        name: "Partnerportal Deutschepost",
        description: "i18n.collectors.partnerportal_deutschepost.description",
        version: "0",
        website: "https://www.partnerportal-deutschepost.de/meine-filiale/zahlen-daten-fakten/verguetungsabrechnung.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1234128.jpg",
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
        entryUrl: "https://www.partnerportal-deutschepost.de/meine-filiale/zahlen-daten-fakten/verguetungsabrechnung.html",
    }

    constructor() {
        super(PartnerportalDeutschepostCollector.CONFIG);
    }
}
