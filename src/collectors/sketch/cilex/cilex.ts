
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CilexCollector extends SketchCollector {

    static CONFIG = {
        id: "cilex",
        name: "Cilex",
        description: "i18n.collectors.cilex.description",
        version: "0",
        website: "https://www.cilex.org.uk/mycilex",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/118091.jpg",
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
        loginUrl: "https://www.cilex.org.uk/mycilex",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CilexCollector.CONFIG);
    }
}
