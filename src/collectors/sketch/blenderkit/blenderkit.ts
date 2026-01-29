
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BlenderkitCollector extends SketchCollector {

    static CONFIG = {
        id: "blenderkit",
        name: "BlenderKit",
        description: "i18n.collectors.blenderkit.description",
        version: "0",
        website: "https://www.blenderkit.com/plans/order/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2729960.jpg",
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
        loginUrl: "https://www.blenderkit.com/plans/order/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BlenderkitCollector.CONFIG);
    }
}
