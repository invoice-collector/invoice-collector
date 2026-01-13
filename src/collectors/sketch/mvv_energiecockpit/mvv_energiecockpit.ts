
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MvvEnergiecockpitCollector extends SketchCollector {

    static CONFIG = {
        id: "mvv_energiecockpit",
        name: "MVV Energiecockpit",
        description: "i18n.collectors.mvv_energiecockpit.description",
        version: "0",
        website: "https://business-login.mvv.de/auth/realms/mvvbusiness/protocol/openid-connect/auth?response_type=code&client_id=energiecockpit&scope=openid&state=7HtGYUgqU_vrMR4BNeb2WRdUE8tnCywvwSO5HplvRB4%3D&redirect_uri=https://energiecockpit.mvv.de/login/oauth2/code/a",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2695444.jpg",
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
        loginUrl: "https://business-login.mvv.de/auth/realms/mvvbusiness/protocol/openid-connect/auth?response_type=code&client_id=energiecockpit&scope=openid&state=7HtGYUgqU_vrMR4BNeb2WRdUE8tnCywvwSO5HplvRB4%3D&redirect_uri=https://energiecockpit.mvv.de/login/oauth2/code/a",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MvvEnergiecockpitCollector.CONFIG);
    }
}
