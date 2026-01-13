
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OneHourTranslationCollector extends SketchCollector {

    static CONFIG = {
        id: "one_hour_translation",
        name: "One Hour Translation",
        description: "i18n.collectors.one_hour_translation.description",
        version: "0",
        website: "https://www.onehourtranslation.com/auth/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/28531.jpg",
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
        loginUrl: "https://www.onehourtranslation.com/auth/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OneHourTranslationCollector.CONFIG);
    }
}
