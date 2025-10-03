
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HussLichtAndTonCollector extends SketchCollector {

    static CONFIG = {
        id: "huss_licht_and_ton",
        name: "Huss Licht & Ton",
        description: "i18n.collectors.huss_licht_and_ton.description",
        version: "0",
        website: "http://www.huss-licht-ton.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/110019.jpg",
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
        entryUrl: "http://www.huss-licht-ton.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HussLichtAndTonCollector.CONFIG);
    }
}
