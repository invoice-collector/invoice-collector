
import { SketchCollector } from '../../sketchCollector';

export class QuickmailCollector extends SketchCollector {

    static CONFIG = {
        id: "quickmail",
        name: "Quickmail",
        description: "i18n.collectors.quickmail.description",
        version: "0",
        website: "https://next.quickmail.io/account/901/settings/subscription",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/413126.jpg",
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
        entryUrl: "https://next.quickmail.io/account/901/settings/subscription",
    }

    constructor() {
        super(QuickmailCollector.CONFIG);
    }
}
