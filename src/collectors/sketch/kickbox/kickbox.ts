
import { SketchCollector } from '../../sketchCollector';

export class KickboxCollector extends SketchCollector {

    static CONFIG = {
        id: "kickbox",
        name: "Kickbox",
        description: "i18n.collectors.kickbox.description",
        version: "0",
        website: "https://app.kickbox.com/accounts/ls4oBBrK/settings/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/429289.jpg",
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
        entryUrl: "https://app.kickbox.com/accounts/ls4oBBrK/settings/invoices",
    }

    constructor() {
        super(KickboxCollector.CONFIG);
    }
}
