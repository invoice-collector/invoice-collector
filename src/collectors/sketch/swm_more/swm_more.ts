
import { SketchCollector } from '../../sketchCollector';

export class SwmMoreCollector extends SketchCollector {

    static CONFIG = {
        id: "swm_more",
        name: "SWM More",
        description: "i18n.collectors.swm_more.description",
        version: "0",
        website: "https://more.swm.de/ladeloesung/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3062247.jpg",
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
        entryUrl: "https://more.swm.de/ladeloesung/account/invoices",
    }

    constructor() {
        super(SwmMoreCollector.CONFIG);
    }
}
