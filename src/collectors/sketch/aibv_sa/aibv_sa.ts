
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AibvSaCollector extends SketchCollector {

    static CONFIG = {
        id: "aibv_sa",
        name: "AIBV SA",
        description: "i18n.collectors.aibv_sa.description",
        version: "0",
        website: "https://planning.aibv.be/Reservaties/ReservatieOverzicht.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4510278.jpg",
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
        loginUrl: "https://planning.aibv.be/Reservaties/ReservatieOverzicht.aspx",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AibvSaCollector.CONFIG);
    }
}
