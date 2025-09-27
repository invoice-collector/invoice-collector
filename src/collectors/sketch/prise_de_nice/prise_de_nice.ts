
import { SketchCollector } from '../../sketchCollector';

export class PriseDeNiceCollector extends SketchCollector {

    static CONFIG = {
        id: "prise_de_nice",
        name: "Prise de Nice",
        description: "i18n.collectors.prise_de_nice.description",
        version: "0",
        website: "https://www.prisedenice.fr/account/#/monitoring#invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4220878.jpg",
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
        entryUrl: "https://www.prisedenice.fr/account/#/monitoring#invoices",
    }

    constructor() {
        super(PriseDeNiceCollector.CONFIG);
    }
}
