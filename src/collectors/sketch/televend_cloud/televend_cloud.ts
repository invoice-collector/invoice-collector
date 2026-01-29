
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TelevendCloudCollector extends SketchCollector {

    static CONFIG = {
        id: "televend_cloud",
        name: "Televend Cloud",
        description: "i18n.collectors.televend_cloud.description",
        version: "0",
        website: "https://route.televendcloud.com/tax-center/tax-report-generator",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1470109.jpg",
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
        loginUrl: "https://route.televendcloud.com/tax-center/tax-report-generator",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TelevendCloudCollector.CONFIG);
    }
}
