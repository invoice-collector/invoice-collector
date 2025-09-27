
import { SketchCollector } from '../../sketchCollector';

export class TurbogruenCollector extends SketchCollector {

    static CONFIG = {
        id: "turbogruen",
        name: "Turbogruen",
        description: "i18n.collectors.turbogruen.description",
        version: "0",
        website: "https://turbogruen.de/account?_gl=1*rp7m9n*_up*MQ..*_gs*MQ..&gclid=EAIaIQobChMIjfn41auYiwMV6jkGAB1b3zdfEAAYASAAEgIt5vD_BwE",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4230682.jpg",
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
        entryUrl: "https://turbogruen.de/account?_gl=1*rp7m9n*_up*MQ..*_gs*MQ..&gclid=EAIaIQobChMIjfn41auYiwMV6jkGAB1b3zdfEAAYASAAEgIt5vD_BwE",
    }

    constructor() {
        super(TurbogruenCollector.CONFIG);
    }
}
