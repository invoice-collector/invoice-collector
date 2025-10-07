
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AudiojungleCollector extends SketchCollector {

    static CONFIG = {
        id: "audiojungle",
        name: "AudioJungle",
        description: "i18n.collectors.audiojungle.description",
        version: "0",
        website: "https://audiojungle.net/user/thebuddies/statement",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4213323.jpg",
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
        entryUrl: "https://audiojungle.net/user/thebuddies/statement",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AudiojungleCollector.CONFIG);
    }
}
