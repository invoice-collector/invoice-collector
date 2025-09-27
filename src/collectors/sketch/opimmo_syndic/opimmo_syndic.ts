
import { SketchCollector } from '../../sketchCollector';

export class OpimmoSyndicCollector extends SketchCollector {

    static CONFIG = {
        id: "opimmo_syndic",
        name: "Opimmo (Syndic)",
        description: "i18n.collectors.opimmo_syndic.description",
        version: "0",
        website: "https://opimmo.gercop-extranet.com/connexion/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/108539.jpg",
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
        entryUrl: "https://opimmo.gercop-extranet.com/connexion/",
    }

    constructor() {
        super(OpimmoSyndicCollector.CONFIG);
    }
}
