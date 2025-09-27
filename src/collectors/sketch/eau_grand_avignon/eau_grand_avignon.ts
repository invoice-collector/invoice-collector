
import { SketchCollector } from '../../sketchCollector';

export class EauGrandAvignonCollector extends SketchCollector {

    static CONFIG = {
        id: "eau_grand_avignon",
        name: "Eau Grand Avignon",
        description: "i18n.collectors.eau_grand_avignon.description",
        version: "0",
        website: "https://www.eaugrandavignon.fr/mon-compte-en-ligne/je-me-connecte",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/666173.jpg",
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
        entryUrl: "https://www.eaugrandavignon.fr/mon-compte-en-ligne/je-me-connecte",
    }

    constructor() {
        super(EauGrandAvignonCollector.CONFIG);
    }
}
