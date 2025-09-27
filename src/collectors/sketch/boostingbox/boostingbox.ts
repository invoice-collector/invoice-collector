
import { SketchCollector } from '../../sketchCollector';

export class BoostingboxCollector extends SketchCollector {

    static CONFIG = {
        id: "boostingbox",
        name: "BoostingBox",
        description: "i18n.collectors.boostingbox.description",
        version: "0",
        website: "http://www.boostingbox.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/536.jpg",
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
        entryUrl: "http://www.boostingbox.de/",
    }

    constructor() {
        super(BoostingboxCollector.CONFIG);
    }
}
