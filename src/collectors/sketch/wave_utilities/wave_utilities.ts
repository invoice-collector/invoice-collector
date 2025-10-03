
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WaveUtilitiesCollector extends SketchCollector {

    static CONFIG = {
        id: "wave_utilities",
        name: "Wave Utilities",
        description: "i18n.collectors.wave_utilities.description",
        version: "0",
        website: "https://www.wave-utilities.co.uk/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778947.jpg",
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
        entryUrl: "https://www.wave-utilities.co.uk/account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WaveUtilitiesCollector.CONFIG);
    }
}
