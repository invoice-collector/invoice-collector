
import { SketchCollector } from '../../sketchCollector';

export class FinetworkCollector extends SketchCollector {

    static CONFIG = {
        id: "finetwork",
        name: "Finetwork",
        description: "i18n.collectors.finetwork.description",
        version: "0",
        website: "https://mi.finetwork.com/#/inicio",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4426724.jpg",
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
        entryUrl: "https://mi.finetwork.com/#/inicio",
    }

    constructor() {
        super(FinetworkCollector.CONFIG);
    }
}
