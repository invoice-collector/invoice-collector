
import { SketchCollector } from '../../sketchCollector';

export class TelekomMyworkplaceCollector extends SketchCollector {

    static CONFIG = {
        id: "telekom_myworkplace",
        name: "Telekom - MyWorkplace",
        description: "i18n.collectors.telekom_myworkplace.description",
        version: "0",
        website: "https://myworkplace.t-systems.com/MyWorkplace/Login.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/125668.jpg",
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
        entryUrl: "https://myworkplace.t-systems.com/MyWorkplace/Login.aspx",
    }

    constructor() {
        super(TelekomMyworkplaceCollector.CONFIG);
    }
}
