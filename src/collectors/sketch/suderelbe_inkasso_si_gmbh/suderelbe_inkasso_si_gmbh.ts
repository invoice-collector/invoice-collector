
import { SketchCollector } from '../../sketchCollector';

export class SuderelbeInkassoSiGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "suderelbe_inkasso_si_gmbh",
        name: "Suderelbe Inkasso (SI) GmbH",
        description: "i18n.collectors.suderelbe_inkasso_si_gmbh.description",
        version: "0",
        website: "https://luca.se-inkasso.de/invoice.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2691941.jpg",
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
        entryUrl: "https://luca.se-inkasso.de/invoice.php",
    }

    constructor() {
        super(SuderelbeInkassoSiGmbhCollector.CONFIG);
    }
}
