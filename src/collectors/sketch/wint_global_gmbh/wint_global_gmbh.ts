
import { SketchCollector } from '../../sketchCollector';

export class WintGlobalGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "wint_global_gmbh",
        name: "wint.global GmbH",
        description: "i18n.collectors.wint_global_gmbh.description",
        version: "0",
        website: "https://login.wint.global/clientarea.php?action=invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/69044.jpg",
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
        entryUrl: "https://login.wint.global/clientarea.php?action=invoices",
    }

    constructor() {
        super(WintGlobalGmbhCollector.CONFIG);
    }
}
