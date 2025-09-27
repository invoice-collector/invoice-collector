
import { SketchCollector } from '../../sketchCollector';

export class EevolutionCollector extends SketchCollector {

    static CONFIG = {
        id: "eevolution",
        name: "eEvolution",
        description: "i18n.collectors.eevolution.description",
        version: "0",
        website: "https://www.eevolution.de/forum/forum/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/561.jpg",
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
        entryUrl: "https://www.eevolution.de/forum/forum/",
    }

    constructor() {
        super(EevolutionCollector.CONFIG);
    }
}
