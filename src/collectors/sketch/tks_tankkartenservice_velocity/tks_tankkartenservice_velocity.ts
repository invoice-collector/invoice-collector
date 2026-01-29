
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TksTankkartenserviceVelocityCollector extends SketchCollector {

    static CONFIG = {
        id: "tks_tankkartenservice_velocity",
        name: "TKS Tankkartenservice - Velocity",
        description: "i18n.collectors.tks_tankkartenservice_velocity.description",
        version: "0",
        website: "https://www.velocityfleet.com/accounts/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/26142.jpg",
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
        loginUrl: "https://www.velocityfleet.com/accounts/login/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TksTankkartenserviceVelocityCollector.CONFIG);
    }
}
