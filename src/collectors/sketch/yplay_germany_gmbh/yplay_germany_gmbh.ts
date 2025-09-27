
import { SketchCollector } from '../../sketchCollector';

export class YplayGermanyGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "yplay_germany_gmbh",
        name: "Yplay Germany GmbH",
        description: "i18n.collectors.yplay_germany_gmbh.description",
        version: "0",
        website: "https://portal.yplay.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2785542.jpg",
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
        entryUrl: "https://portal.yplay.de",
    }

    constructor() {
        super(YplayGermanyGmbhCollector.CONFIG);
    }
}
