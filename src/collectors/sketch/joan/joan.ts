
import { SketchCollector } from '../../sketchCollector';

export class JoanCollector extends SketchCollector {

    static CONFIG = {
        id: "joan",
        name: "Joan",
        description: "i18n.collectors.joan.description",
        version: "0",
        website: "https://master.joan.vnct.xyz/settings/subscriptions/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2698828.jpg",
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
        entryUrl: "https://master.joan.vnct.xyz/settings/subscriptions/",
    }

    constructor() {
        super(JoanCollector.CONFIG);
    }
}
