import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SoloParisCollector extends SketchCollector {

    static CONFIG = {
        id: "solo_paris",
        name: "Solo Paris",
        description: "i18n.collectors.solo_paris.description",
        version: "0",
        website: "https://www.sologroup-paris.com",
        logo: "https://s7g3.scene7.com/is/image/soloinvest/Logo_Solo_Paris_noir",
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
        super(SoloParisCollector.CONFIG);
    }
}
