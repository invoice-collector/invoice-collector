
import { SketchCollector } from '../../sketchCollector';

export class AppradarCollector extends SketchCollector {

    static CONFIG = {
        id: "appradar",
        name: "appradar",
        description: "i18n.collectors.appradar.description",
        version: "0",
        website: "https://web.appradar.com/settings/payment",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/148960.jpg",
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
        entryUrl: "https://web.appradar.com/settings/payment",
    }

    constructor() {
        super(AppradarCollector.CONFIG);
    }
}
