
import { SketchCollector } from '../../sketchCollector';

export class _10dollarCaCollector extends SketchCollector {

    static CONFIG = {
        id: "10dollar_ca",
        name: "10dollar.ca",
        description: "i18n.collectors.10dollar_ca.description",
        version: "0",
        website: "https://10dollar.ca/en/invoice.php?id=158783351728",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/392735.jpg",
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
        entryUrl: "https://10dollar.ca/en/invoice.php?id=158783351728",
    }

    constructor() {
        super(_10dollarCaCollector.CONFIG);
    }
}
