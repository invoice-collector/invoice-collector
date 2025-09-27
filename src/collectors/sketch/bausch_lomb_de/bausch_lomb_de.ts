
import { SketchCollector } from '../../sketchCollector';

export class BauschLombDeCollector extends SketchCollector {

    static CONFIG = {
        id: "bausch_lomb_de",
        name: "Bausch Lomb(de)",
        description: "i18n.collectors.bausch_lomb_de.description",
        version: "0",
        website: "https://www.bausch-lomb.de/single-pages/e-rechnungen/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/526490.jpg",
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
        entryUrl: "https://www.bausch-lomb.de/single-pages/e-rechnungen/",
    }

    constructor() {
        super(BauschLombDeCollector.CONFIG);
    }
}
