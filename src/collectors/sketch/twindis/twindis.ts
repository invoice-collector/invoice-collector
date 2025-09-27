
import { SketchCollector } from '../../sketchCollector';

export class TwindisCollector extends SketchCollector {

    static CONFIG = {
        id: "twindis",
        name: "Twindis",
        description: "i18n.collectors.twindis.description",
        version: "0",
        website: "https://www.twindis.com/en/account/inloggen.html?_returnURL=%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32666.jpg",
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
        entryUrl: "https://www.twindis.com/en/account/inloggen.html?_returnURL=%2F",
    }

    constructor() {
        super(TwindisCollector.CONFIG);
    }
}
