
import { SketchCollector } from '../../sketchCollector';

export class BauschLombFrCollector extends SketchCollector {

    static CONFIG = {
        id: "bausch_lomb_fr",
        name: "Bausch Lomb(fr)",
        description: "i18n.collectors.bausch_lomb_fr.description",
        version: "0",
        website: "http://www.bausch.fr/chirurgie/fr/access",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/496966.jpg",
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
        entryUrl: "http://www.bausch.fr/chirurgie/fr/access",
    }

    constructor() {
        super(BauschLombFrCollector.CONFIG);
    }
}
