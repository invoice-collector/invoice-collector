
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EmsysVeoliaUsaCollector extends SketchCollector {

    static CONFIG = {
        id: "emsys_veolia_usa",
        name: "Emsys Veolia USA",
        description: "i18n.collectors.emsys_veolia_usa.description",
        version: "0",
        website: "https://emsys1.com/Home/LogOn?ReturnUrl=https%3A%2F%2Fauth.emsys1.com%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DEMSysWeb%26redirect_uri%3Dhttps%253A%252F%252Femsys1.com%252Fsignin-oidc%252F%26response_mode%3Dform_post%26response_type%3Did_token%2520t",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2409468.jpg",
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
        loginUrl: "https://emsys1.com/Home/LogOn?ReturnUrl=https%3A%2F%2Fauth.emsys1.com%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DEMSysWeb%26redirect_uri%3Dhttps%253A%252F%252Femsys1.com%252Fsignin-oidc%252F%26response_mode%3Dform_post%26response_type%3Did_token%2520t",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EmsysVeoliaUsaCollector.CONFIG);
    }
}
