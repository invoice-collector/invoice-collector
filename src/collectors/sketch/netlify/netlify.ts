
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NetlifyCollector extends SketchCollector {

    static CONFIG = {
        id: "netlify",
        name: "Netlify",
        description: "i18n.collectors.netlify.description",
        version: "0",
        website: "https://app.netlify.com/login/email?next=true",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/31089.jpg",
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
        loginUrl: "https://app.netlify.com/login/email?next=true",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(NetlifyCollector.CONFIG);
    }
}
