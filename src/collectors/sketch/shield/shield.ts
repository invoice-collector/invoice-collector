
import { SketchCollector } from '../../sketchCollector';

export class ShieldCollector extends SketchCollector {

    static CONFIG = {
        id: "shield",
        name: "SHIELD",
        description: "i18n.collectors.shield.description",
        version: "0",
        website: "https://analytics.shieldapp.ai/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1230953.jpg",
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
        entryUrl: "https://analytics.shieldapp.ai/account/billing",
    }

    constructor() {
        super(ShieldCollector.CONFIG);
    }
}
