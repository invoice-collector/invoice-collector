
import { SketchCollector } from '../../sketchCollector';

export class PressidiumRWordpressHostingCollector extends SketchCollector {

    static CONFIG = {
        id: "pressidium_r_wordpress_hosting",
        name: "Pressidium(r) Wordpress Hosting",
        description: "i18n.collectors.pressidium_r_wordpress_hosting.description",
        version: "0",
        website: "https://cp.pressidium.com/index.php?r=billing/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/73832.jpg",
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
        entryUrl: "https://cp.pressidium.com/index.php?r=billing/invoices",
    }

    constructor() {
        super(PressidiumRWordpressHostingCollector.CONFIG);
    }
}
