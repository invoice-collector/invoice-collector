
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class UnisonAudioCollector extends SketchCollector {

    static CONFIG = {
        id: "unison_audio",
        name: "Unison.Audio",
        description: "i18n.collectors.unison_audio.description",
        version: "0",
        website: "https://app.unison.audio/dashboard/billing-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1881952.jpg",
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
        entryUrl: "https://app.unison.audio/dashboard/billing-history",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UnisonAudioCollector.CONFIG);
    }
}
