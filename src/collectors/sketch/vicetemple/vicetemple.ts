
import { SketchCollector } from '../../sketchCollector';

export class VicetempleCollector extends SketchCollector {

    static CONFIG = {
        id: "vicetemple",
        name: "ViceTemple",
        description: "i18n.collectors.vicetemple.description",
        version: "0",
        website: "https://vicetemple.net/clientarea.php?action=invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/385971.jpg",
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
        entryUrl: "https://vicetemple.net/clientarea.php?action=invoices",
    }

    constructor() {
        super(VicetempleCollector.CONFIG);
    }
}
