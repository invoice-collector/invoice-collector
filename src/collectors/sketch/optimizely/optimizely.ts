
import { SketchCollector } from '../../sketchCollector';

export class OptimizelyCollector extends SketchCollector {

    static CONFIG = {
        id: "optimizely",
        name: "Optimizely",
        description: "i18n.collectors.optimizely.description",
        version: "0",
        website: "https://app.optimizely.com/accountsettings/account/plan",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/545.jpg",
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
        entryUrl: "https://app.optimizely.com/accountsettings/account/plan",
    }

    constructor() {
        super(OptimizelyCollector.CONFIG);
    }
}
