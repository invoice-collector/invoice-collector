
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VultrCollector extends SketchCollector {

    static CONFIG = {
        id: "vultr",
        name: "Vultr",
        description: "i18n.collectors.vultr.description",
        version: "0",
        website: "https://my.vultr.com/billing/#billinghistory",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9929.jpg",
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
        loginUrl: "https://my.vultr.com/billing/#billinghistory",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(VultrCollector.CONFIG);
    }
}
