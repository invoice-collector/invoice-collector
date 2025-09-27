
import { SketchCollector } from '../../sketchCollector';

export class BestbrewCollector extends SketchCollector {

    static CONFIG = {
        id: "bestbrew",
        name: "BESTbrew",
        description: "i18n.collectors.bestbrew.description",
        version: "0",
        website: "https://www.bestbrew.de/my/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2157933.jpg",
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
        entryUrl: "https://www.bestbrew.de/my/invoices",
    }

    constructor() {
        super(BestbrewCollector.CONFIG);
    }
}
