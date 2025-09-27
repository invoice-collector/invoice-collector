
import { SketchCollector } from '../../sketchCollector';

export class EauDOlivetCollector extends SketchCollector {

    static CONFIG = {
        id: "eau_d_olivet",
        name: "eau d'Olivet",
        description: "i18n.collectors.eau_d_olivet.description",
        version: "0",
        website: "https://www.eau-olivet.fr/mon-compte-en-ligne/je-me-connecte",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/837752.jpg",
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
        entryUrl: "https://www.eau-olivet.fr/mon-compte-en-ligne/je-me-connecte",
    }

    constructor() {
        super(EauDOlivetCollector.CONFIG);
    }
}
