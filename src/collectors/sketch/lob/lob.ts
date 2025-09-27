
import { SketchCollector } from '../../sketchCollector';

export class LobCollector extends SketchCollector {

    static CONFIG = {
        id: "lob",
        name: "Lob",
        description: "i18n.collectors.lob.description",
        version: "0",
        website: "https://dashboard.lob.com/#/settings/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/51575.jpg",
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
        entryUrl: "https://dashboard.lob.com/#/settings/invoices",
    }

    constructor() {
        super(LobCollector.CONFIG);
    }
}
