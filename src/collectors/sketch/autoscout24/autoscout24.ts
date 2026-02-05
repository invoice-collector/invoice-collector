
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class Autoscout24Collector extends SketchCollector {

    static CONFIG = {
        id: "autoscout24",
        name: "AutoScout24",
        description: "i18n.collectors.autoscout24.description",
        version: "0",
        website: "https://accounts.autoscout24.com/twosteplogin?ReturnUrl=%2foidc%2fauthorize%3fclient_id%3dmyarea%26scope%3dopenid%2bemail%26redirect_uri%3dhttps%253A%252F%252Fmyarea.autoscout24.de%252Foidc%252Fcallback%26state%3d6fe91c10b1594e9e9d33c15ef652e334%26nonce%3",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/24484.jpg",
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
        loginUrl: "https://accounts.autoscout24.com/twosteplogin?ReturnUrl=%2foidc%2fauthorize%3fclient_id%3dmyarea%26scope%3dopenid%2bemail%26redirect_uri%3dhttps%253A%252F%252Fmyarea.autoscout24.de%252Foidc%252Fcallback%26state%3d6fe91c10b1594e9e9d33c15ef652e334%26nonce%3",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(Autoscout24Collector.CONFIG);
    }
}
