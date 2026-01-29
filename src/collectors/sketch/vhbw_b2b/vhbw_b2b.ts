
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VhbwB2bCollector extends SketchCollector {

    static CONFIG = {
        id: "vhbw_b2b",
        name: "VHBW b2b",
        description: "i18n.collectors.vhbw_b2b.description",
        version: "0",
        website: "https://vhbw-b2b.de/kunden/bestelluebersicht.htm?st=5",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1349391.jpg",
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
        loginUrl: "https://vhbw-b2b.de/kunden/bestelluebersicht.htm?st=5",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(VhbwB2bCollector.CONFIG);
    }
}
