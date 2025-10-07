
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SoundcloudCollector extends SketchCollector {

    static CONFIG = {
        id: "soundcloud",
        name: "Soundcloud",
        description: "i18n.collectors.soundcloud.description",
        version: "0",
        website: "https://soundcloud.com/you/subscriptions",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/13366.jpg",
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
        entryUrl: "https://soundcloud.com/you/subscriptions",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SoundcloudCollector.CONFIG);
    }
}
