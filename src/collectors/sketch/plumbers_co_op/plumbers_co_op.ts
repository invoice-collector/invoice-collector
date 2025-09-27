
import { SketchCollector } from '../../sketchCollector';

export class PlumbersCoOpCollector extends SketchCollector {

    static CONFIG = {
        id: "plumbers_co_op",
        name: "Plumbers Co-op",
        description: "i18n.collectors.plumbers_co_op.description",
        version: "0",
        website: "https://www.pscoop.com.au/invoice-credits",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/541214.jpg",
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
        entryUrl: "https://www.pscoop.com.au/invoice-credits",
    }

    constructor() {
        super(PlumbersCoOpCollector.CONFIG);
    }
}
