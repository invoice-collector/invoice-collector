
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EonHungariaCollector extends SketchCollector {

    static CONFIG = {
        id: "eon_hungaria",
        name: "EON Hungaria",
        description: "i18n.collectors.eon_hungaria.description",
        version: "0",
        website: "https://e-portal.eon-hungaria.com/ugyintezes/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/492131.jpg",
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
        loginUrl: "https://e-portal.eon-hungaria.com/ugyintezes/billing",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EonHungariaCollector.CONFIG);
    }
}
