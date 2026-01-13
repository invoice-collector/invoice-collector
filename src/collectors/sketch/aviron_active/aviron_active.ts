
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AvironActiveCollector extends SketchCollector {

    static CONFIG = {
        id: "aviron_active",
        name: "Aviron Active",
        description: "i18n.collectors.aviron_active.description",
        version: "0",
        website: "https://accounts.avironactive.com/login?redirect=https://accounts.avironactive.com/membership",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2131278.jpg",
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
        loginUrl: "https://accounts.avironactive.com/login?redirect=https://accounts.avironactive.com/membership",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AvironActiveCollector.CONFIG);
    }
}
