
import { SketchCollector } from '../../sketchCollector';

export class WpRechnungenCollector extends SketchCollector {

    static CONFIG = {
        id: "wp_rechnungen",
        name: "WP_Rechnungen",
        description: "i18n.collectors.wp_rechnungen.description",
        version: "0",
        website: "http://www.wp-rechnungen.de/mein-konto/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11295.jpg",
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
        entryUrl: "http://www.wp-rechnungen.de/mein-konto/",
    }

    constructor() {
        super(WpRechnungenCollector.CONFIG);
    }
}
