
import { SketchCollector } from '../../sketchCollector';

export class SniplyCollector extends SketchCollector {

    static CONFIG = {
        id: "sniply",
        name: "Sniply",
        description: "i18n.collectors.sniply.description",
        version: "0",
        website: "https://snip.ly/auth-signup?",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1040934.jpg",
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
        entryUrl: "https://snip.ly/auth-signup?",
    }

    constructor() {
        super(SniplyCollector.CONFIG);
    }
}
