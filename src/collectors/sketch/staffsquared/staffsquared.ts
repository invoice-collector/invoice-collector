
import { SketchCollector } from '../../sketchCollector';

export class StaffsquaredCollector extends SketchCollector {

    static CONFIG = {
        id: "staffsquared",
        name: "staffsquared",
        description: "i18n.collectors.staffsquared.description",
        version: "0",
        website: "https://secure.staffsquared.com/billing/summary/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7523.jpg",
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
        entryUrl: "https://secure.staffsquared.com/billing/summary/",
    }

    constructor() {
        super(StaffsquaredCollector.CONFIG);
    }
}
