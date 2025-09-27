
import { SketchCollector } from '../../sketchCollector';

export class SimquadratCollector extends SketchCollector {

    static CONFIG = {
        id: "simquadrat",
        name: "simquadrat",
        description: "i18n.collectors.simquadrat.description",
        version: "0",
        website: "https://www.sipgatebasic.de/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7011.jpg",
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
        entryUrl: "https://www.sipgatebasic.de/account",
    }

    constructor() {
        super(SimquadratCollector.CONFIG);
    }
}
