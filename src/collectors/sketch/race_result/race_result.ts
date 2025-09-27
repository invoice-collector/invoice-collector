
import { SketchCollector } from '../../sketchCollector';

export class RaceResultCollector extends SketchCollector {

    static CONFIG = {
        id: "race_result",
        name: "Race Result",
        description: "i18n.collectors.race_result.description",
        version: "0",
        website: "https://www.raceresult.com/de-de/account/invoices.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1603733.jpg",
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
        entryUrl: "https://www.raceresult.com/de-de/account/invoices.php",
    }

    constructor() {
        super(RaceResultCollector.CONFIG);
    }
}
