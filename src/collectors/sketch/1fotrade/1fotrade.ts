import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class UnFotradeCollector extends SketchCollector {

    static CONFIG = {
        id: "1fotrade",
        name: "1Fotrade",
        description: "i18n.collectors.1fotrade.description",
        version: "0",
        website: "https://www.1fotrade.com",
        logo: "https://www.1fotrade.com/ressources/infotrade/img/logo__700.webp",
        type: CollectorType.SKETCH,
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
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UnFotradeCollector.CONFIG);
    }
}
