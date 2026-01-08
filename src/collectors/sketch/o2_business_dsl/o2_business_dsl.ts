
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class O2BusinessDslCollector extends SketchCollector {

    static CONFIG = {
        id: "o2_business_dsl",
        name: "O2 Business DSL",
        description: "i18n.collectors.o2_business_dsl.description",
        version: "0",
        website: "https://easyaccess.o2business.de/eCare/s/Rechnungsubersicht",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1854565.jpg",
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
        loginUrl: "https://easyaccess.o2business.de/eCare/s/Rechnungsubersicht",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(O2BusinessDslCollector.CONFIG);
    }
}
