
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MediaTempleCollector extends SketchCollector {

    static CONFIG = {
        id: "media_temple",
        name: "Media Temple",
        description: "i18n.collectors.media_temple.description",
        version: "0",
        website: "https://ac.mediatemple.net/login.mt",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9354.jpg",
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
        entryUrl: "https://ac.mediatemple.net/login.mt",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MediaTempleCollector.CONFIG);
    }
}
