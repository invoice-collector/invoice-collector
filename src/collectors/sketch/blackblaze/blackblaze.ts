
import { SketchCollector } from '../../sketchCollector';

export class BlackblazeCollector extends SketchCollector {

    static CONFIG = {
        id: "blackblaze",
        name: "blackblaze",
        description: "i18n.collectors.blackblaze.description",
        version: "0",
        website: "https://secure.backblaze.com/billing.htm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/103132.jpg",
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
        entryUrl: "https://secure.backblaze.com/billing.htm",
    }

    constructor() {
        super(BlackblazeCollector.CONFIG);
    }
}
