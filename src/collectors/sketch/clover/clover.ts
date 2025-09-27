
import { SketchCollector } from '../../sketchCollector';

export class CloverCollector extends SketchCollector {

    static CONFIG = {
        id: "clover",
        name: "Clover",
        description: "i18n.collectors.clover.description",
        version: "0",
        website: "https://www.eu.clover.com/reporting/sales-overview",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4472217.jpg",
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
        entryUrl: "https://www.eu.clover.com/reporting/sales-overview",
    }

    constructor() {
        super(CloverCollector.CONFIG);
    }
}
