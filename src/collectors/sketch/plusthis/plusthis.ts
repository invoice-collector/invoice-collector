
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PlusthisCollector extends SketchCollector {

    static CONFIG = {
        id: "plusthis",
        name: "Plusthis",
        description: "i18n.collectors.plusthis.description",
        version: "0",
        website: "https://admin.plusthis.com/users/12493/retired_payment_sources",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1329437.jpg",
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
        loginUrl: "https://admin.plusthis.com/users/12493/retired_payment_sources",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PlusthisCollector.CONFIG);
    }
}
