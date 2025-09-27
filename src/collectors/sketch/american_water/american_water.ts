
import { SketchCollector } from '../../sketchCollector';

export class AmericanWaterCollector extends SketchCollector {

    static CONFIG = {
        id: "american_water",
        name: "American Water",
        description: "i18n.collectors.american_water.description",
        version: "0",
        website: "https://auth.amwater.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/37728.jpg",
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
        entryUrl: "https://auth.amwater.com/",
    }

    constructor() {
        super(AmericanWaterCollector.CONFIG);
    }
}
