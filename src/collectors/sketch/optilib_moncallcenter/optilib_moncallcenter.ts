
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OptilibMoncallcenterCollector extends SketchCollector {

    static CONFIG = {
        id: "optilib_moncallcenter",
        name: "OPTILIB / MonCallcenter",
        description: "i18n.collectors.optilib_moncallcenter.description",
        version: "0",
        website: "https://www.mon-callcenter.com/facture.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1287684.jpg",
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
        loginUrl: "https://www.mon-callcenter.com/facture.php",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(OptilibMoncallcenterCollector.CONFIG);
    }
}
