
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LeadrebelPulserioAgCollector extends SketchCollector {

    static CONFIG = {
        id: "leadrebel_pulserio_ag",
        name: "LeadRebel / Pulserio AG",
        description: "i18n.collectors.leadrebel_pulserio_ag.description",
        version: "0",
        website: "https://app.leadrebel.io/settings/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2550652.jpg",
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
        loginUrl: "https://app.leadrebel.io/settings/invoices",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LeadrebelPulserioAgCollector.CONFIG);
    }
}
