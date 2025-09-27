
import { SketchCollector } from '../../sketchCollector';

export class RpOnlineCollector extends SketchCollector {

    static CONFIG = {
        id: "rp_online",
        name: "rp-online",
        description: "i18n.collectors.rp_online.description",
        version: "0",
        website: "https://id.rp-online.de/login?",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2842114.jpg",
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
        entryUrl: "https://id.rp-online.de/login?",
    }

    constructor() {
        super(RpOnlineCollector.CONFIG);
    }
}
