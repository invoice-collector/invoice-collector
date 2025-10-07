
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FlaschenbauerCollector extends SketchCollector {

    static CONFIG = {
        id: "flaschenbauer",
        name: "Flaschenbauer",
        description: "i18n.collectors.flaschenbauer.description",
        version: "0",
        website: "https://www.flaschenbauer.de/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2669972.jpg",
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
        entryUrl: "https://www.flaschenbauer.de/account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FlaschenbauerCollector.CONFIG);
    }
}
