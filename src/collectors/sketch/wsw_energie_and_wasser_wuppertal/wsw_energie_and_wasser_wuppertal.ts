
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WswEnergieAndWasserWuppertalCollector extends SketchCollector {

    static CONFIG = {
        id: "wsw_energie_and_wasser_wuppertal",
        name: "WSW Energie & Wasser Wuppertal",
        description: "i18n.collectors.wsw_energie_and_wasser_wuppertal.description",
        version: "0",
        website: "https://meine-wsw.wsw-online.de/DKS/MyInvoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2765573.jpg",
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
        loginUrl: "https://meine-wsw.wsw-online.de/DKS/MyInvoices/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(WswEnergieAndWasserWuppertalCollector.CONFIG);
    }
}
