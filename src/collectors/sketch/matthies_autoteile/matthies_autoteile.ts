
import { SketchCollector } from '../../sketchCollector';

export class MatthiesAutoteileCollector extends SketchCollector {

    static CONFIG = {
        id: "matthies_autoteile",
        name: "MATTHIES Autoteile",
        description: "i18n.collectors.matthies_autoteile.description",
        version: "0",
        website: "https://www.matthies.de/mein-matthies/e-rechnung-belegarchiv.html?no_cache=1#",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/210994.jpg",
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
        entryUrl: "https://www.matthies.de/mein-matthies/e-rechnung-belegarchiv.html?no_cache=1#",
    }

    constructor() {
        super(MatthiesAutoteileCollector.CONFIG);
    }
}
