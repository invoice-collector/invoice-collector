
import { SketchCollector } from '../../sketchCollector';

export class OsmozisCollector extends SketchCollector {

    static CONFIG = {
        id: "osmozis",
        name: "Osmozis",
        description: "i18n.collectors.osmozis.description",
        version: "0",
        website: "https://console.osmozis.com/fr/cccfc8ce9c/inc_invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/746547.jpg",
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
        entryUrl: "https://console.osmozis.com/fr/cccfc8ce9c/inc_invoices",
    }

    constructor() {
        super(OsmozisCollector.CONFIG);
    }
}
