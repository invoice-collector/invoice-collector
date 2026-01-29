
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VivenuCollector extends SketchCollector {

    static CONFIG = {
        id: "vivenu",
        name: "vivenu",
        description: "i18n.collectors.vivenu.description",
        version: "0",
        website: "https://dashboard.vivenu.com/balancings",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1264919.jpg",
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
        loginUrl: "https://dashboard.vivenu.com/balancings",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(VivenuCollector.CONFIG);
    }
}
