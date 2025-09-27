
import { SketchCollector } from '../../sketchCollector';

export class RobocorpCollector extends SketchCollector {

    static CONFIG = {
        id: "robocorp",
        name: "Robocorp",
        description: "i18n.collectors.robocorp.description",
        version: "0",
        website: "https://cloud.robocorp.com/saigaprodo9hwf/settings/billing/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1276488.jpg",
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
        entryUrl: "https://cloud.robocorp.com/saigaprodo9hwf/settings/billing/invoices",
    }

    constructor() {
        super(RobocorpCollector.CONFIG);
    }
}
