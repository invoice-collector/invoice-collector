
import { SketchCollector } from '../../sketchCollector';

export class EurostarCollector extends SketchCollector {

    static CONFIG = {
        id: "eurostar",
        name: "Eurostar",
        description: "i18n.collectors.eurostar.description",
        version: "0",
        website: "https://www.eurostar.com/customer-dashboard/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2038746.jpg",
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
        entryUrl: "https://www.eurostar.com/customer-dashboard/",
    }

    constructor() {
        super(EurostarCollector.CONFIG);
    }
}
