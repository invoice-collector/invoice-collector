
import { SketchCollector } from '../../sketchCollector';

export class LookbackCollector extends SketchCollector {

    static CONFIG = {
        id: "lookback",
        name: "Lookback",
        description: "i18n.collectors.lookback.description",
        version: "0",
        website: "https://lookback.io/canyon-bicycles-gmbh/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/110592.jpg",
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
        entryUrl: "https://lookback.io/canyon-bicycles-gmbh/settings/billing",
    }

    constructor() {
        super(LookbackCollector.CONFIG);
    }
}
