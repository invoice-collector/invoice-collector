
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BlackmagicdesingCollector extends SketchCollector {

    static CONFIG = {
        id: "blackmagicdesing",
        name: "BlackMagicDesing",
        description: "i18n.collectors.blackmagicdesing.description",
        version: "0",
        website: "https://cloud.blackmagicdesign.com/apps/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2201646.jpg",
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
        loginUrl: "https://cloud.blackmagicdesign.com/apps/settings/billing",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BlackmagicdesingCollector.CONFIG);
    }
}
