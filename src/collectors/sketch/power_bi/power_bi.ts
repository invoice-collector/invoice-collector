
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PowerBiCollector extends SketchCollector {

    static CONFIG = {
        id: "power_bi",
        name: "Power BI",
        description: "i18n.collectors.power_bi.description",
        version: "0",
        website: "https://login.microsoftonline.com/common/oauth2/authorize?client_id=871c010f-5e61-4fb1-83ac-98610a7e9110&response_mode=form_post&response_type=code+id_token&scope=openid+profile&state=OpenIdConnect.AuthenticationProperties%3dlkfCxund9GwdAWRvYI5ldWs0bU7kh6",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/50912.jpg",
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
        loginUrl: "https://login.microsoftonline.com/common/oauth2/authorize?client_id=871c010f-5e61-4fb1-83ac-98610a7e9110&response_mode=form_post&response_type=code+id_token&scope=openid+profile&state=OpenIdConnect.AuthenticationProperties%3dlkfCxund9GwdAWRvYI5ldWs0bU7kh6",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PowerBiCollector.CONFIG);
    }
}
