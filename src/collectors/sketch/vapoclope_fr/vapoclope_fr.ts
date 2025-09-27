
import { SketchCollector } from '../../sketchCollector';

export class VapoclopeFrCollector extends SketchCollector {

    static CONFIG = {
        id: "vapoclope_fr",
        name: "Vapoclope.fr",
        description: "i18n.collectors.vapoclope_fr.description",
        version: "0",
        website: "https://www.vapoclope.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/124840.jpg",
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
        entryUrl: "https://www.vapoclope.fr/",
    }

    constructor() {
        super(VapoclopeFrCollector.CONFIG);
    }
}
