
import { SketchCollector } from '../../sketchCollector';

export class BaydinBoomerangForGmailCollector extends SketchCollector {

    static CONFIG = {
        id: "baydin_boomerang_for_gmail",
        name: "Baydin/Boomerang for Gmail",
        description: "i18n.collectors.baydin_boomerang_for_gmail.description",
        version: "0",
        website: "https://b4g.baydin.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/74482.jpg",
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
        entryUrl: "https://b4g.baydin.com/account",
    }

    constructor() {
        super(BaydinBoomerangForGmailCollector.CONFIG);
    }
}
