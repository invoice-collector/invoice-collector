
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FlexvelopCollector extends SketchCollector {

    static CONFIG = {
        id: "flexvelop",
        name: "flexvelop",
        description: "i18n.collectors.flexvelop.description",
        version: "0",
        website: "https://www.flexvelop.com/customer-dashboard/contracts/FLEX-Y2X6H7X7",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1881936.jpg",
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
        loginUrl: "https://www.flexvelop.com/customer-dashboard/contracts/FLEX-Y2X6H7X7",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FlexvelopCollector.CONFIG);
    }
}
