
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MaterialiseCollector extends SketchCollector {

    static CONFIG = {
        id: "materialise",
        name: "materialise",
        description: "i18n.collectors.materialise.description",
        version: "0",
        website: "https://onsite.materialise.com/de/account/login?ReturnUrl=%2fde",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1371830.jpg",
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
        loginUrl: "https://onsite.materialise.com/de/account/login?ReturnUrl=%2fde",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MaterialiseCollector.CONFIG);
    }
}
