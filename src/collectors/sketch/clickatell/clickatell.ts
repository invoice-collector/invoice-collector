
import { SketchCollector } from '../../sketchCollector';

export class ClickatellCollector extends SketchCollector {

    static CONFIG = {
        id: "clickatell",
        name: "Clickatell",
        description: "i18n.collectors.clickatell.description",
        version: "0",
        website: "https://app.clickatell.com/billing/services",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2157913.jpg",
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
        entryUrl: "https://app.clickatell.com/billing/services",
    }

    constructor() {
        super(ClickatellCollector.CONFIG);
    }
}
