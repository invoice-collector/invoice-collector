
import { SketchCollector } from '../../sketchCollector';

export class FairfaxWaterCollector extends SketchCollector {

    static CONFIG = {
        id: "fairfax_water",
        name: "Fairfax Water",
        description: "i18n.collectors.fairfax_water.description",
        version: "0",
        website: "https://fwcustomer.org/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2723588.jpg",
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
        entryUrl: "https://fwcustomer.org/",
    }

    constructor() {
        super(FairfaxWaterCollector.CONFIG);
    }
}
