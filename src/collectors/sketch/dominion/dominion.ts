
import { SketchCollector } from '../../sketchCollector';

export class DominionCollector extends SketchCollector {

    static CONFIG = {
        id: "dominion",
        name: "Dominion",
        description: "i18n.collectors.dominion.description",
        version: "0",
        website: "https://myaccount.dominionenergy.com/portal/#/Billinghistory",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8859.jpg",
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
        entryUrl: "https://myaccount.dominionenergy.com/portal/#/Billinghistory",
    }

    constructor() {
        super(DominionCollector.CONFIG);
    }
}
