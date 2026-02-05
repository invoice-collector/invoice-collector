
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PicsartEnterpriseCollector extends SketchCollector {

    static CONFIG = {
        id: "picsart_enterprise",
        name: "Picsart - Enterprise",
        description: "i18n.collectors.picsart_enterprise.description",
        version: "0",
        website: "https://console.picsart.io/usage/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4590445.jpg",
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
        loginUrl: "https://console.picsart.io/usage/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PicsartEnterpriseCollector.CONFIG);
    }
}
