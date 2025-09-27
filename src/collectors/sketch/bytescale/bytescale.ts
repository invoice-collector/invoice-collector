
import { SketchCollector } from '../../sketchCollector';

export class BytescaleCollector extends SketchCollector {

    static CONFIG = {
        id: "bytescale",
        name: "bytescale",
        description: "i18n.collectors.bytescale.description",
        version: "0",
        website: "https://www.bytescale.com/dashboard/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2973396.jpg",
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
        entryUrl: "https://www.bytescale.com/dashboard/billing",
    }

    constructor() {
        super(BytescaleCollector.CONFIG);
    }
}
