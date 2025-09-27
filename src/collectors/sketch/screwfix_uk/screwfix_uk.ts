
import { SketchCollector } from '../../sketchCollector';

export class ScrewfixUkCollector extends SketchCollector {

    static CONFIG = {
        id: "screwfix_uk",
        name: "Screwfix UK",
        description: "i18n.collectors.screwfix_uk.description",
        version: "0",
        website: "https://credit.trade.co.uk/Secure/Statements.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3973654.jpg",
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
        entryUrl: "https://credit.trade.co.uk/Secure/Statements.aspx",
    }

    constructor() {
        super(ScrewfixUkCollector.CONFIG);
    }
}
