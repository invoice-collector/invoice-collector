
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FacturadirectaCollector extends SketchCollector {

    static CONFIG = {
        id: "facturadirecta",
        name: "FacturaDirecta",
        description: "i18n.collectors.facturadirecta.description",
        version: "0",
        website: "https://app.facturadirecta.com/#/launchpad/billing/fd2/com_228aa22a-574f-47a6-835a-28b78bf5b12c",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/503987.jpg",
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
        loginUrl: "https://app.facturadirecta.com/#/launchpad/billing/fd2/com_228aa22a-574f-47a6-835a-28b78bf5b12c",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FacturadirectaCollector.CONFIG);
    }
}
