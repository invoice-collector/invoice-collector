
import { SketchCollector } from '../../sketchCollector';

export class WayfairCollector extends SketchCollector {

    static CONFIG = {
        id: "wayfair",
        name: "Wayfair",
        description: "i18n.collectors.wayfair.description",
        version: "0",
        website: "https://www.wayfair.de/v/account/welcome/show",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/428737.jpg",
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
        entryUrl: "https://www.wayfair.de/v/account/welcome/show",
    }

    constructor() {
        super(WayfairCollector.CONFIG);
    }
}
