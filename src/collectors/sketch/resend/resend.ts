
import { SketchCollector } from '../../sketchCollector';

export class ResendCollector extends SketchCollector {

    static CONFIG = {
        id: "resend",
        name: "Resend",
        description: "i18n.collectors.resend.description",
        version: "0",
        website: "https://resend.com/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4590471.jpg",
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
        entryUrl: "https://resend.com/settings/billing",
    }

    constructor() {
        super(ResendCollector.CONFIG);
    }
}
