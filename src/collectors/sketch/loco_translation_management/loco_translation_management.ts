
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LocoTranslationManagementCollector extends SketchCollector {

    static CONFIG = {
        id: "loco_translation_management",
        name: "Loco - Translation Management",
        description: "i18n.collectors.loco_translation_management.description",
        version: "0",
        website: "https://localise.biz/account/plan/billing#hist",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/79812.jpg",
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
        loginUrl: "https://localise.biz/account/plan/billing#hist",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(LocoTranslationManagementCollector.CONFIG);
    }
}
