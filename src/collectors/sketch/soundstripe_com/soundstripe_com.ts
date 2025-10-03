
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SoundstripeComCollector extends SketchCollector {

    static CONFIG = {
        id: "soundstripe_com",
        name: "soundstripe.com",
        description: "i18n.collectors.soundstripe_com.description",
        version: "0",
        website: "https://app.soundstripe.com/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/413904.jpg",
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
        entryUrl: "https://app.soundstripe.com/account/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SoundstripeComCollector.CONFIG);
    }
}
