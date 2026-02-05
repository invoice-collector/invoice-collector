
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PressidiumRWordpressHostingCollector extends SketchCollector {

    static CONFIG = {
        id: "pressidium_r_wordpress_hosting",
        name: "Pressidium(r) Wordpress Hosting",
        description: "i18n.collectors.pressidium_r_wordpress_hosting.description",
        version: "0",
        website: "https://cp.pressidium.com/index.php?r=billing/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/73832.jpg",
        type: CollectorType.SKETCH,
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
        loginUrl: "https://cp.pressidium.com/index.php?r=billing/invoices",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PressidiumRWordpressHostingCollector.CONFIG);
    }
}
