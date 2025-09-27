
import { SketchCollector } from '../../sketchCollector';

export class MutuelleCipresCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_cipres",
        name: "Mutuelle Cipres",
        description: "i18n.collectors.mutuelle_cipres.description",
        version: "0",
        website: "http://www.cipres.fr/fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/127665.jpg",
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
        entryUrl: "http://www.cipres.fr/fr/",
    }

    constructor() {
        super(MutuelleCipresCollector.CONFIG);
    }
}
