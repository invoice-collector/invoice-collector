
import { SketchCollector } from '../../sketchCollector';

export class NiceMatinCollector extends SketchCollector {

    static CONFIG = {
        id: "nice_matin",
        name: "Nice-Matin",
        description: "i18n.collectors.nice_matin.description",
        version: "0",
        website: "https://www.nicematin.com/user/payment",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4420519.jpg",
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
        entryUrl: "https://www.nicematin.com/user/payment",
    }

    constructor() {
        super(NiceMatinCollector.CONFIG);
    }
}
