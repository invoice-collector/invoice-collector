
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DieZaCollector extends SketchCollector {

    static CONFIG = {
        id: "die_za",
        name: "Die ZA",
        description: "i18n.collectors.die_za.description",
        version: "0",
        website: "https://www.die-za.de/anmelden",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2175412.jpg",
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
        entryUrl: "https://www.die-za.de/anmelden",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DieZaCollector.CONFIG);
    }
}
