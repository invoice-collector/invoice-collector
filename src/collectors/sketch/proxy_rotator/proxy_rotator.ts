
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ProxyRotatorCollector extends SketchCollector {

    static CONFIG = {
        id: "proxy_rotator",
        name: "Proxy Rotator",
        description: "i18n.collectors.proxy_rotator.description",
        version: "0",
        website: "https://www.proxyrotator.com/app/purchase/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/202496.jpg",
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
        loginUrl: "https://www.proxyrotator.com/app/purchase/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ProxyRotatorCollector.CONFIG);
    }
}
