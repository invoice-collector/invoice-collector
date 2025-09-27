
import { SketchCollector } from '../../sketchCollector';

export class EmbEnergieCollector extends SketchCollector {

    static CONFIG = {
        id: "emb_energie",
        name: "EMB Energie",
        description: "i18n.collectors.emb_energie.description",
        version: "0",
        website: "https://www.emb-gmbh.de/onlineservice/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/90713.jpg",
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
        entryUrl: "https://www.emb-gmbh.de/onlineservice/login",
    }

    constructor() {
        super(EmbEnergieCollector.CONFIG);
    }
}
