
import { SketchCollector } from '../../sketchCollector';

export class IntercomCollector extends SketchCollector {

    static CONFIG = {
        id: "intercom",
        name: "Intercom",
        description: "i18n.collectors.intercom.description",
        version: "0",
        website: "https://app.intercom.com/admins/sign_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10022.jpg",
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
        entryUrl: "https://app.intercom.com/admins/sign_in",
    }

    constructor() {
        super(IntercomCollector.CONFIG);
    }
}
