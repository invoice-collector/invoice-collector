
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MeoCollector extends SketchCollector {

    static CONFIG = {
        id: "meo",
        name: "MEO",
        description: "i18n.collectors.meo.description",
        version: "0",
        website: "https://login.telecom.pt/adfs/ls/?wa=wsignin1.0&wtrealm=https%3a%2f%2fid.services.telecom.pt%2fwsfed%2fcliente-meo-web&wreply=https%3a%2f%2fid.services.telecom.pt%2fwsfed%2fcliente-meo-web%2freferer-SlRHMVk3Wlc1a3krZlpKSnRveFFvbFN5WXZHZkZyU3E0YUxaMUc3Z3VE",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9455.jpg",
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
        loginUrl: "https://login.telecom.pt/adfs/ls/?wa=wsignin1.0&wtrealm=https%3a%2f%2fid.services.telecom.pt%2fwsfed%2fcliente-meo-web&wreply=https%3a%2f%2fid.services.telecom.pt%2fwsfed%2fcliente-meo-web%2freferer-SlRHMVk3Wlc1a3krZlpKSnRveFFvbFN5WXZHZkZyU3E0YUxaMUc3Z3VE",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MeoCollector.CONFIG);
    }
}
