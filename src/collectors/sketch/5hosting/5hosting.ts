
import { SketchCollector } from '../../sketchCollector';

export class _5hostingCollector extends SketchCollector {

    static CONFIG = {
        id: "5hosting",
        name: "5Hosting",
        description: "i18n.collectors.5hosting.description",
        version: "0",
        website: "https://whmcs.webhoster.ag/clientarea.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10678.jpg",
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
        entryUrl: "https://whmcs.webhoster.ag/clientarea.php",
    }

    constructor() {
        super(_5hostingCollector.CONFIG);
    }
}
