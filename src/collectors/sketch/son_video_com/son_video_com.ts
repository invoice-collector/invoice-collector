
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SonVideoComCollector extends SketchCollector {

    static CONFIG = {
        id: "son_video_com",
        name: "Son-Video.Com",
        description: "i18n.collectors.son_video_com.description",
        version: "0",
        website: "https://www.son-video.com/mon-compte/connexion",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/976574.jpg",
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
        entryUrl: "https://www.son-video.com/mon-compte/connexion",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SonVideoComCollector.CONFIG);
    }
}
