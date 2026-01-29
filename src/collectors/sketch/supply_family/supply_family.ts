
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SupplyFamilyCollector extends SketchCollector {

    static CONFIG = {
        id: "supply_family",
        name: "Supply.Family",
        description: "i18n.collectors.supply_family.description",
        version: "0",
        website: "https://supply.family/my-account/orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2973493.jpg",
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
        loginUrl: "https://supply.family/my-account/orders/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SupplyFamilyCollector.CONFIG);
    }
}
