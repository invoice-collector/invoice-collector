
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FunnelspotCollector extends SketchCollector {

    static CONFIG = {
        id: "funnelspot",
        name: "Funnelspot",
        description: "i18n.collectors.funnelspot.description",
        version: "0",
        website: "https://app.funnelspot.io",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3004070.jpg",
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
        loginUrl: "https://app.funnelspot.io",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FunnelspotCollector.CONFIG);
    }
}
