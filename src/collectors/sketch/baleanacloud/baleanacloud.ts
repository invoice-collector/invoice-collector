
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BaleanacloudCollector extends SketchCollector {

    static CONFIG = {
        id: "baleanacloud",
        name: "BaleanaCloud",
        description: "i18n.collectors.baleanacloud.description",
        version: "0",
        website: "https://dashboard.balena-cloud.com/billing/summary",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/169056.jpg",
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
        loginUrl: "https://dashboard.balena-cloud.com/billing/summary",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BaleanacloudCollector.CONFIG);
    }
}
