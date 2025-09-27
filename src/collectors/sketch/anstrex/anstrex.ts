
import { SketchCollector } from '../../sketchCollector';

export class AnstrexCollector extends SketchCollector {

    static CONFIG = {
        id: "anstrex",
        name: "anstrex",
        description: "i18n.collectors.anstrex.description",
        version: "0",
        website: "https://app.anstrex.com/subscription_info_new",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/70688.jpg",
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
        entryUrl: "https://app.anstrex.com/subscription_info_new",
    }

    constructor() {
        super(AnstrexCollector.CONFIG);
    }
}
