
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SimpliBotCollector extends SketchCollector {

    static CONFIG = {
        id: "simpli_bot",
        name: "Simpli.Bot",
        description: "i18n.collectors.simpli_bot.description",
        version: "0",
        website: "https://app.simpli-marketing.de/v2/location/8jJXUWtFF5Ga34nqSbKM/settings/company-billing/billing?tab=payments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4554151.jpg",
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
        entryUrl: "https://app.simpli-marketing.de/v2/location/8jJXUWtFF5Ga34nqSbKM/settings/company-billing/billing?tab=payments",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SimpliBotCollector.CONFIG);
    }
}
