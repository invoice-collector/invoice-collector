
import { SketchCollector } from '../../sketchCollector';

export class WpRocketResellerCollector extends SketchCollector {

    static CONFIG = {
        id: "wp_rocket_reseller",
        name: "WP Rocket - Reseller",
        description: "i18n.collectors.wp_rocket_reseller.description",
        version: "0",
        website: "https://wp-rocket.me/de/reseller/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/120365.jpg",
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
        entryUrl: "https://wp-rocket.me/de/reseller/",
    }

    constructor() {
        super(WpRocketResellerCollector.CONFIG);
    }
}
