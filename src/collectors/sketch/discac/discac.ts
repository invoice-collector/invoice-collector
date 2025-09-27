
import { SketchCollector } from '../../sketchCollector';

export class DiscacCollector extends SketchCollector {

    static CONFIG = {
        id: "discac",
        name: "DISCAC",
        description: "i18n.collectors.discac.description",
        version: "0",
        website: "https://espacepro.discac.fr/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2842116.jpg",
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
        entryUrl: "https://espacepro.discac.fr/invoices",
    }

    constructor() {
        super(DiscacCollector.CONFIG);
    }
}
