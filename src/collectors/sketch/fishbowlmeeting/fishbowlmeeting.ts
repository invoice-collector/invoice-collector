
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FishbowlmeetingCollector extends SketchCollector {

    static CONFIG = {
        id: "fishbowlmeeting",
        name: "Fishbowlmeeting",
        description: "i18n.collectors.fishbowlmeeting.description",
        version: "0",
        website: "https://fishbowlmeetings.com/billing#/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/745224.jpg",
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
        loginUrl: "https://fishbowlmeetings.com/billing#/invoices",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FishbowlmeetingCollector.CONFIG);
    }
}
