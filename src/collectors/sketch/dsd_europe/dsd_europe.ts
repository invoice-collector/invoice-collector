
import { SketchCollector } from '../../sketchCollector';

export class DsdEuropeCollector extends SketchCollector {

    static CONFIG = {
        id: "dsd_europe",
        name: "DSD Europe",
        description: "i18n.collectors.dsd_europe.description",
        version: "0",
        website: "https://www.dsdeurope.com/home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32827.jpg",
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
        entryUrl: "https://www.dsdeurope.com/home",
    }

    constructor() {
        super(DsdEuropeCollector.CONFIG);
    }
}
