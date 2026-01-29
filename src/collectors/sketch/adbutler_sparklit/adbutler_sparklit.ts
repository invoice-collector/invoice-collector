
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AdbutlerSparklitCollector extends SketchCollector {

    static CONFIG = {
        id: "adbutler_sparklit",
        name: "ADButler, Sparklit",
        description: "i18n.collectors.adbutler_sparklit.description",
        version: "0",
        website: "https://www.sparklit.com/common_admin.spark?",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/185319.jpg",
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
        loginUrl: "https://www.sparklit.com/common_admin.spark?",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AdbutlerSparklitCollector.CONFIG);
    }
}
