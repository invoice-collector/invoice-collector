
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SoundsonlineCollector extends SketchCollector {

    static CONFIG = {
        id: "soundsonline",
        name: "Soundsonline",
        description: "i18n.collectors.soundsonline.description",
        version: "0",
        website: "https://www.soundsonline.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1221015.jpg",
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
        entryUrl: "https://www.soundsonline.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SoundsonlineCollector.CONFIG);
    }
}
