
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RescuetimeCollector extends SketchCollector {

    static CONFIG = {
        id: "rescuetime",
        name: "RescueTime",
        description: "i18n.collectors.rescuetime.description",
        version: "0",
        website: "https://www.rescuetime.com/invoices/list",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/40938.jpg",
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
        loginUrl: "https://www.rescuetime.com/invoices/list",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RescuetimeCollector.CONFIG);
    }
}
