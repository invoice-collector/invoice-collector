
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VoxloudCollector extends SketchCollector {

    static CONFIG = {
        id: "voxloud",
        name: "Voxloud",
        description: "i18n.collectors.voxloud.description",
        version: "0",
        website: "https://controlpanel.voxloud.com/main/#/app/subscription-review",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1953809.jpg",
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
        loginUrl: "https://controlpanel.voxloud.com/main/#/app/subscription-review",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(VoxloudCollector.CONFIG);
    }
}
