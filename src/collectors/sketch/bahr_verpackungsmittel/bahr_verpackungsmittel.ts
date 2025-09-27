
import { SketchCollector } from '../../sketchCollector';

export class BahrVerpackungsmittelCollector extends SketchCollector {

    static CONFIG = {
        id: "bahr_verpackungsmittel",
        name: "BAHR Verpackungsmittel",
        description: "i18n.collectors.bahr_verpackungsmittel.description",
        version: "0",
        website: "https://www.baehr-verpackung.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/931042.jpg",
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
        entryUrl: "https://www.baehr-verpackung.de/",
    }

    constructor() {
        super(BahrVerpackungsmittelCollector.CONFIG);
    }
}
