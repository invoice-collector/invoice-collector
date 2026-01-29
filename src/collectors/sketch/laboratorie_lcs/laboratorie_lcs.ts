
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LaboratorieLcsCollector extends SketchCollector {

    static CONFIG = {
        id: "laboratorie_lcs",
        name: "Laboratorie - LCS",
        description: "i18n.collectors.laboratorie_lcs.description",
        version: "0",
        website: "https://www.lcsorders.com/login?redirect=%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4216812.jpg",
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
        loginUrl: "https://www.lcsorders.com/login?redirect=%2F",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(LaboratorieLcsCollector.CONFIG);
    }
}
