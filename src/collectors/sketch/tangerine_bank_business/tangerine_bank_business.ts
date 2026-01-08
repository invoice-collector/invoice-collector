
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TangerineBankBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "tangerine_bank_business",
        name: "Tangerine Bank - Business",
        description: "i18n.collectors.tangerine_bank_business.description",
        version: "0",
        website: "https://www.tangerine.ca",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/186059.jpg",
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
        loginUrl: "https://www.tangerine.ca",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TangerineBankBusinessCollector.CONFIG);
    }
}
