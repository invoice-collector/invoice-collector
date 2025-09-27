
import { SketchCollector } from '../../sketchCollector';

export class EauDugrandlyonCollector extends SketchCollector {

    static CONFIG = {
        id: "eau_dugrandlyon",
        name: "eau DUGRANDLYON",
        description: "i18n.collectors.eau_dugrandlyon.description",
        version: "0",
        website: "https://agence.eaudugrandlyon.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/816605.jpg",
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
        entryUrl: "https://agence.eaudugrandlyon.com",
    }

    constructor() {
        super(EauDugrandlyonCollector.CONFIG);
    }
}
