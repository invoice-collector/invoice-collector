
import { SketchCollector } from '../../sketchCollector';

export class SweetUpsellCollector extends SketchCollector {

    static CONFIG = {
        id: "sweet_upsell",
        name: "Sweet upsell",
        description: "i18n.collectors.sweet_upsell.description",
        version: "0",
        website: "https://admin.sweetupsell.com/auth",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1132289.jpg",
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
        entryUrl: "https://admin.sweetupsell.com/auth",
    }

    constructor() {
        super(SweetUpsellCollector.CONFIG);
    }
}
