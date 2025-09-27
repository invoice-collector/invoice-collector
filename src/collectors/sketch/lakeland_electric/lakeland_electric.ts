
import { SketchCollector } from '../../sketchCollector';

export class LakelandElectricCollector extends SketchCollector {

    static CONFIG = {
        id: "lakeland_electric",
        name: "Lakeland Electric",
        description: "i18n.collectors.lakeland_electric.description",
        version: "0",
        website: "https://lakelandelectric.com/billing/home.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4472169.jpg",
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
        entryUrl: "https://lakelandelectric.com/billing/home.aspx",
    }

    constructor() {
        super(LakelandElectricCollector.CONFIG);
    }
}
