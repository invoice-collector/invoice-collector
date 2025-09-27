
import { SketchCollector } from '../../sketchCollector';

export class Check24ProfisCollector extends SketchCollector {

    static CONFIG = {
        id: "check24_profis",
        name: "Check24 Profis",
        description: "i18n.collectors.check24_profis.description",
        version: "0",
        website: "https://experts.handwerk.check24.de/craftsmen/sp/desktop/prime/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2732108.jpg",
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
        entryUrl: "https://experts.handwerk.check24.de/craftsmen/sp/desktop/prime/invoice",
    }

    constructor() {
        super(Check24ProfisCollector.CONFIG);
    }
}
