
import { SketchCollector } from '../../sketchCollector';

export class SelencyCollector extends SketchCollector {

    static CONFIG = {
        id: "selency",
        name: "Selency",
        description: "i18n.collectors.selency.description",
        version: "0",
        website: "https://www.selency.fr/mon-compte/factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/745225.jpg",
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
        entryUrl: "https://www.selency.fr/mon-compte/factures",
    }

    constructor() {
        super(SelencyCollector.CONFIG);
    }
}
