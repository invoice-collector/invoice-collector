
import { SketchCollector } from '../../sketchCollector';

export class EprimoCollector extends SketchCollector {

    static CONFIG = {
        id: "eprimo",
        name: "eprimo",
        description: "i18n.collectors.eprimo.description",
        version: "0",
        website: "https://www.eprimo.de/service/contract/inbox",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/15613.jpg",
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
        entryUrl: "https://www.eprimo.de/service/contract/inbox",
    }

    constructor() {
        super(EprimoCollector.CONFIG);
    }
}
