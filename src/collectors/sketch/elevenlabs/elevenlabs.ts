
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ElevenlabsCollector extends SketchCollector {

    static CONFIG = {
        id: "elevenlabs",
        name: "Elevenlabs",
        description: "i18n.collectors.elevenlabs.description",
        version: "0",
        website: "https://elevenlabs.io/subscription",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2157923.jpg",
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
        entryUrl: "https://elevenlabs.io/subscription",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ElevenlabsCollector.CONFIG);
    }
}
