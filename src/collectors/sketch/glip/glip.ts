
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GlipCollector extends SketchCollector {

    static CONFIG = {
        id: "glip",
        name: "Glip",
        description: "i18n.collectors.glip.description",
        version: "0",
        website: "https://service.ringcentral.com/login/unifiedLoginM.html?session=-983496917345042139&responseType=code&clientId=cZPfEqZkQxKa9dUEu9RkCA&brandId=1210&state=/rc&localeId=en_US&endpointId=&display=touch&prompt=login%20sso&scope=&appUrlScheme=https%3A%2F%2Fapp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6420.jpg",
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
        loginUrl: "https://service.ringcentral.com/login/unifiedLoginM.html?session=-983496917345042139&responseType=code&clientId=cZPfEqZkQxKa9dUEu9RkCA&brandId=1210&state=/rc&localeId=en_US&endpointId=&display=touch&prompt=login%20sso&scope=&appUrlScheme=https%3A%2F%2Fapp",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(GlipCollector.CONFIG);
    }
}
