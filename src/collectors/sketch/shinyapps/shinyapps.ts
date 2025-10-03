
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ShinyappsCollector extends SketchCollector {

    static CONFIG = {
        id: "shinyapps",
        name: "ShinyApps",
        description: "i18n.collectors.shinyapps.description",
        version: "0",
        website: "https://www.shinyapps.io/admin/#/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/213233.jpg",
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
        entryUrl: "https://www.shinyapps.io/admin/#/account/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ShinyappsCollector.CONFIG);
    }
}
