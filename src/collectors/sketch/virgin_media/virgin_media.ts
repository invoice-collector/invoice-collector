
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VirginMediaCollector extends SketchCollector {

    static CONFIG = {
        id: "virgin_media",
        name: "Virgin Media",
        description: "i18n.collectors.virgin_media.description",
        version: "0",
        website: "https://my.virginmedia.com/my-bills/index",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9615.jpg",
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
        loginUrl: "https://my.virginmedia.com/my-bills/index",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VirginMediaCollector.CONFIG);
    }
}
