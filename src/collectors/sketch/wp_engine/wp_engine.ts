
import { SketchCollector } from '../../sketchCollector';

export class WpEngineCollector extends SketchCollector {

    static CONFIG = {
        id: "wp_engine",
        name: "WP Engine",
        description: "i18n.collectors.wp_engine.description",
        version: "0",
        website: "https://my.wpengine.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8729.jpg",
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
        entryUrl: "https://my.wpengine.com/",
    }

    constructor() {
        super(WpEngineCollector.CONFIG);
    }
}
