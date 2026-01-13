
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ManxUtilitiesCollector extends SketchCollector {

    static CONFIG = {
        id: "manx_utilities",
        name: "Manx Utilities",
        description: "i18n.collectors.manx_utilities.description",
        version: "0",
        website: "https://www.manxutilities.im/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/424284.jpg",
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
        loginUrl: "https://www.manxutilities.im/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ManxUtilitiesCollector.CONFIG);
    }
}
