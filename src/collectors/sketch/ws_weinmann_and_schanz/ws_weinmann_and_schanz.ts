
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WsWeinmannAndSchanzCollector extends SketchCollector {

    static CONFIG = {
        id: "ws_weinmann_and_schanz",
        name: "WS Weinmann & Schanz",
        description: "i18n.collectors.ws_weinmann_and_schanz.description",
        version: "0",
        website: "https://www.weinmann-schanz.de/de/de/Anmelden-Abmelden/Anmelden.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/66611.jpg",
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
        entryUrl: "https://www.weinmann-schanz.de/de/de/Anmelden-Abmelden/Anmelden.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WsWeinmannAndSchanzCollector.CONFIG);
    }
}
