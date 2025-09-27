
import { SketchCollector } from '../../sketchCollector';

export class ActronicsGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "actronics_gmbh",
        name: "Actronics GmbH",
        description: "i18n.collectors.actronics_gmbh.description",
        version: "0",
        website: "https://www.actronics-gmbh.de/konto/rechnung#invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/779002.jpg",
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
        entryUrl: "https://www.actronics-gmbh.de/konto/rechnung#invoices",
    }

    constructor() {
        super(ActronicsGmbhCollector.CONFIG);
    }
}
