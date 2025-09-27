
import { SketchCollector } from '../../sketchCollector';

export class TmeCollector extends SketchCollector {

    static CONFIG = {
        id: "tme",
        name: "TME",
        description: "i18n.collectors.tme.description",
        version: "0",
        website: "https://www.tme.eu/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/832514.jpg",
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
        entryUrl: "https://www.tme.eu/",
    }

    constructor() {
        super(TmeCollector.CONFIG);
    }
}
