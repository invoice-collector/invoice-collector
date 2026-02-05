
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SquarelovinCollector extends SketchCollector {

    static CONFIG = {
        id: "squarelovin",
        name: "squarelovin",
        description: "i18n.collectors.squarelovin.description",
        version: "0",
        website: "https://app.squarelovin.com/analytics/9e3c3731-e3d2-4703-8b69-effa03d567ec/settings",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/534312.jpg",
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
        loginUrl: "https://app.squarelovin.com/analytics/9e3c3731-e3d2-4703-8b69-effa03d567ec/settings",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SquarelovinCollector.CONFIG);
    }
}
