
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FoodoraPartnerCollector extends SketchCollector {

    static CONFIG = {
        id: "foodora_partner",
        name: "Foodora Partner",
        description: "i18n.collectors.foodora_partner.description",
        version: "0",
        website: "https://partner.foodora.com/finance",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4560925.jpg",
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
        entryUrl: "https://partner.foodora.com/finance",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FoodoraPartnerCollector.CONFIG);
    }
}
