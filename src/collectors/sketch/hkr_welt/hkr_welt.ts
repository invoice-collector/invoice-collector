
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HkrWeltCollector extends SketchCollector {

    static CONFIG = {
        id: "hkr_welt",
        name: "HKR WELT",
        description: "i18n.collectors.hkr_welt.description",
        version: "0",
        website: "https://hkr-welt.de/Mein-Konto-HKR-Welt",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/830227.jpg",
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
        entryUrl: "https://hkr-welt.de/Mein-Konto-HKR-Welt",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HkrWeltCollector.CONFIG);
    }
}
