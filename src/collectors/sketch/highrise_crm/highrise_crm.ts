
import { SketchCollector } from '../../sketchCollector';

export class HighriseCrmCollector extends SketchCollector {

    static CONFIG = {
        id: "highrise_crm",
        name: "Highrise CRM",
        description: "i18n.collectors.highrise_crm.description",
        version: "0",
        website: "https://launchpad.37signals.com/highrise/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9399.jpg",
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
        entryUrl: "https://launchpad.37signals.com/highrise/signin",
    }

    constructor() {
        super(HighriseCrmCollector.CONFIG);
    }
}
