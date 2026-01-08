
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SproutvideoCollector extends SketchCollector {

    static CONFIG = {
        id: "sproutvideo",
        name: "sproutvideo",
        description: "i18n.collectors.sproutvideo.description",
        version: "0",
        website: "https://sproutvideo.com/settings/billing#details_212262",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/388014.jpg",
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
        loginUrl: "https://sproutvideo.com/settings/billing#details_212262",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SproutvideoCollector.CONFIG);
    }
}
