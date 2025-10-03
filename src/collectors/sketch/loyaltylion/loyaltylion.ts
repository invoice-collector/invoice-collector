
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LoyaltylionCollector extends SketchCollector {

    static CONFIG = {
        id: "loyaltylion",
        name: "LoyaltyLion",
        description: "i18n.collectors.loyaltylion.description",
        version: "0",
        website: "https://app.loyaltylion.com/accounts/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2973514.jpg",
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
        entryUrl: "https://app.loyaltylion.com/accounts/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LoyaltylionCollector.CONFIG);
    }
}
