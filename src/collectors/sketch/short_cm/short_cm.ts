
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ShortCmCollector extends SketchCollector {

    static CONFIG = {
        id: "short_cm",
        name: "Short.CM",
        description: "i18n.collectors.short_cm.description",
        version: "0",
        website: "https://app.short.cm/users/dashboard/links",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/187234.jpg",
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
        loginUrl: "https://app.short.cm/users/dashboard/links",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ShortCmCollector.CONFIG);
    }
}
