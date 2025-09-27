
import { SketchCollector } from '../../sketchCollector';

export class BestSublimationCollector extends SketchCollector {

    static CONFIG = {
        id: "best_sublimation",
        name: "Best Sublimation",
        description: "i18n.collectors.best_sublimation.description",
        version: "0",
        website: "https://shop.bestsublimation.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/191589.jpg",
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
        entryUrl: "https://shop.bestsublimation.de/",
    }

    constructor() {
        super(BestSublimationCollector.CONFIG);
    }
}
