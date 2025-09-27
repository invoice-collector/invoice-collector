
import { SketchCollector } from '../../sketchCollector';

export class LocoTranslationManagementCollector extends SketchCollector {

    static CONFIG = {
        id: "loco_translation_management",
        name: "Loco - Translation Management",
        description: "i18n.collectors.loco_translation_management.description",
        version: "0",
        website: "https://localise.biz/account/plan/billing#hist",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/79812.jpg",
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
        entryUrl: "https://localise.biz/account/plan/billing#hist",
    }

    constructor() {
        super(LocoTranslationManagementCollector.CONFIG);
    }
}
