
import { SketchCollector } from '../../sketchCollector';

export class CeleonetCollector extends SketchCollector {

    static CONFIG = {
        id: "celeonet",
        name: "Celeonet",
        description: "i18n.collectors.celeonet.description",
        version: "0",
        website: "https://extranet.celeonet.fr/fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/112289.jpg",
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
        entryUrl: "https://extranet.celeonet.fr/fr/",
    }

    constructor() {
        super(CeleonetCollector.CONFIG);
    }
}
