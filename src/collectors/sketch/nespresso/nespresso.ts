
import { SketchCollector } from '../../sketchCollector';

export class NespressoCollector extends SketchCollector {

    static CONFIG = {
        id: "nespresso",
        name: "Nespresso",
        description: "i18n.collectors.nespresso.description",
        version: "0",
        website: "https://www.nespresso.com/de/de/home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7020.jpg",
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
        entryUrl: "https://www.nespresso.com/de/de/home",
    }

    constructor() {
        super(NespressoCollector.CONFIG);
    }
}
