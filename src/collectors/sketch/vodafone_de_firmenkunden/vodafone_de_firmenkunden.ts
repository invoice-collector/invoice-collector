
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VodafoneDeFirmenkundenCollector extends SketchCollector {

    static CONFIG = {
        id: "vodafone_de_firmenkunden",
        name: "Vodafone.de - Firmenkunden",
        description: "i18n.collectors.vodafone_de_firmenkunden.description",
        version: "0",
        website: "https://www.vodafone.de/ussa/enterprise/fkpDashboardLogin.ftel",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/69121.jpg",
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
        loginUrl: "https://www.vodafone.de/ussa/enterprise/fkpDashboardLogin.ftel",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(VodafoneDeFirmenkundenCollector.CONFIG);
    }
}
