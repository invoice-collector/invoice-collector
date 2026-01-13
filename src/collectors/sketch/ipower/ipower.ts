
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class IpowerCollector extends SketchCollector {

    static CONFIG = {
        id: "ipower",
        name: "iPower",
        description: "i18n.collectors.ipower.description",
        version: "0",
        website: "https://secure.ipower.com/secure/login.bml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8975.jpg",
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
        loginUrl: "https://secure.ipower.com/secure/login.bml",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IpowerCollector.CONFIG);
    }
}
