
import { SketchCollector } from '../../sketchCollector';

export class GearsetCollector extends SketchCollector {

    static CONFIG = {
        id: "gearset",
        name: "Gearset",
        description: "i18n.collectors.gearset.description",
        version: "0",
        website: "https://app.gearset.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2158125.jpg",
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
        entryUrl: "https://app.gearset.com/",
    }

    constructor() {
        super(GearsetCollector.CONFIG);
    }
}
