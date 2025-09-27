
import { SketchCollector } from '../../sketchCollector';

export class NwwiCollector extends SketchCollector {

    static CONFIG = {
        id: "nwwi",
        name: "NWWI",
        description: "i18n.collectors.nwwi.description",
        version: "0",
        website: "https://site.nwwi.nl/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32662.jpg",
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
        entryUrl: "https://site.nwwi.nl/login/",
    }

    constructor() {
        super(NwwiCollector.CONFIG);
    }
}
