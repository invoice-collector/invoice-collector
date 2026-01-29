
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CegidCollector extends SketchCollector {

    static CONFIG = {
        id: "cegid",
        name: "Cegid",
        description: "i18n.collectors.cegid.description",
        version: "0",
        website: "https://www.cegidlife.com/fr/factures-et-avoirs",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4375595.jpg",
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
        loginUrl: "https://www.cegidlife.com/fr/factures-et-avoirs",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CegidCollector.CONFIG);
    }
}
