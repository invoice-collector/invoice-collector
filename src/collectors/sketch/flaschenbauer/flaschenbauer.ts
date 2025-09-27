
import { SketchCollector } from '../../sketchCollector';

export class FlaschenbauerCollector extends SketchCollector {

    static CONFIG = {
        id: "flaschenbauer",
        name: "Flaschenbauer",
        description: "i18n.collectors.flaschenbauer.description",
        version: "0",
        website: "https://www.flaschenbauer.de/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2669972.jpg",
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
    }

    constructor() {
        super(FlaschenbauerCollector.CONFIG);
    }
}
