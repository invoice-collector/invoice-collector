
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TinyCloudCollector extends SketchCollector {

    static CONFIG = {
        id: "tiny_cloud",
        name: "Tiny Cloud",
        description: "i18n.collectors.tiny_cloud.description",
        version: "0",
        website: "https://www.tiny.cloud/my-account/profile/subscription/1472988",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/775854.jpg",
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
        loginUrl: "https://www.tiny.cloud/my-account/profile/subscription/1472988",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TinyCloudCollector.CONFIG);
    }
}
