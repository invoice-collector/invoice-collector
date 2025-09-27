
import { SketchCollector } from '../../sketchCollector';

export class AdgoalCollector extends SketchCollector {

    static CONFIG = {
        id: "adgoal",
        name: "Adgoal",
        description: "i18n.collectors.adgoal.description",
        version: "0",
        website: "https://www.adgoal.de/publisher/payouts.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/132108.jpg",
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
        entryUrl: "https://www.adgoal.de/publisher/payouts.html",
    }

    constructor() {
        super(AdgoalCollector.CONFIG);
    }
}
