
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TeagCollector extends SketchCollector {

    static CONFIG = {
        id: "teag",
        name: "TEAG",
        description: "i18n.collectors.teag.description",
        version: "0",
        website: "https://energiebanking.thueringerenergie.de/powercommerce/teag/fo/portal/eb",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/75336.jpg",
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
        loginUrl: "https://energiebanking.thueringerenergie.de/powercommerce/teag/fo/portal/eb",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TeagCollector.CONFIG);
    }
}
