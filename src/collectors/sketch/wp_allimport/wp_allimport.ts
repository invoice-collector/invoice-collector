
import { SketchCollector } from '../../sketchCollector';

export class WpAllimportCollector extends SketchCollector {

    static CONFIG = {
        id: "wp_allimport",
        name: "WP allimport",
        description: "i18n.collectors.wp_allimport.description",
        version: "0",
        website: "https://www.wpallimport.com/portal/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/409696.jpg",
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
        entryUrl: "https://www.wpallimport.com/portal/",
    }

    constructor() {
        super(WpAllimportCollector.CONFIG);
    }
}
