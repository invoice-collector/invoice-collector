
import { SketchCollector } from '../../sketchCollector';

export class AgurCollector extends SketchCollector {

    static CONFIG = {
        id: "agur",
        name: "AGUR",
        description: "i18n.collectors.agur.description",
        version: "0",
        website: "https://ael.agur.fr/#/facture",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4699797.jpg",
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
        entryUrl: "https://ael.agur.fr/#/facture",
    }

    constructor() {
        super(AgurCollector.CONFIG);
    }
}
