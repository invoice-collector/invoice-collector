
import { SketchCollector } from '../../sketchCollector';

export class VosfacturesCollector extends SketchCollector {

    static CONFIG = {
        id: "vosfactures",
        name: "VosFactures",
        description: "i18n.collectors.vosfactures.description",
        version: "0",
        website: "https://evenove.vosfactures.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/849549.jpg",
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
        entryUrl: "https://evenove.vosfactures.fr/",
    }

    constructor() {
        super(VosfacturesCollector.CONFIG);
    }
}
