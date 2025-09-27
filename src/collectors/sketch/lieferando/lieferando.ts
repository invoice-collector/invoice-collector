
import { SketchCollector } from '../../sketchCollector';

export class LieferandoCollector extends SketchCollector {

    static CONFIG = {
        id: "lieferando",
        name: "Lieferando",
        description: "i18n.collectors.lieferando.description",
        version: "0",
        website: "https://www.lieferando.de/meinaccount/meine-bestellhistorie",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/197396.jpg",
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
        entryUrl: "https://www.lieferando.de/meinaccount/meine-bestellhistorie",
    }

    constructor() {
        super(LieferandoCollector.CONFIG);
    }
}
