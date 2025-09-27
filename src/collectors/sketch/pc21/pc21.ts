
import { SketchCollector } from '../../sketchCollector';

export class Pc21Collector extends SketchCollector {

    static CONFIG = {
        id: "pc21",
        name: "PC21",
        description: "i18n.collectors.pc21.description",
        version: "0",
        website: "https://clients.pc21.fr/edition_factures.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1616504.jpg",
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
        entryUrl: "https://clients.pc21.fr/edition_factures.php",
    }

    constructor() {
        super(Pc21Collector.CONFIG);
    }
}
