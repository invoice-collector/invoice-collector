
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WaveappsCollector extends SketchCollector {

    static CONFIG = {
        id: "waveapps",
        name: "Waveapps",
        description: "i18n.collectors.waveapps.description",
        version: "0",
        website: "https://my.waveapps.com/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/37954.jpg",
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
        entryUrl: "https://my.waveapps.com/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WaveappsCollector.CONFIG);
    }
}
