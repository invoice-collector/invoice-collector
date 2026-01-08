
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NpowerPersonalCollector extends SketchCollector {

    static CONFIG = {
        id: "npower_personal",
        name: "npower Personal",
        description: "i18n.collectors.npower_personal.description",
        version: "0",
        website: "https://www.npower.com/at_home/applications/atlas.web/billsandpayments.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8868.jpg",
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
        loginUrl: "https://www.npower.com/at_home/applications/atlas.web/billsandpayments.aspx",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NpowerPersonalCollector.CONFIG);
    }
}
