
import { SketchCollector } from '../../sketchCollector';

export class UnitymediaDeCollector extends SketchCollector {

    static CONFIG = {
        id: "unitymedia_de",
        name: "Unitymedia.de",
        description: "i18n.collectors.unitymedia_de.description",
        version: "0",
        website: "https://www.unitymedia.de/kundencenter/meine-rechnungen/alle-rechnungen?months=12",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4905.jpg",
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
        entryUrl: "https://www.unitymedia.de/kundencenter/meine-rechnungen/alle-rechnungen?months=12",
    }

    constructor() {
        super(UnitymediaDeCollector.CONFIG);
    }
}
