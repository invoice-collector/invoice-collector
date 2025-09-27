
import { SketchCollector } from '../../sketchCollector';

export class ClipdealerCollector extends SketchCollector {

    static CONFIG = {
        id: "clipdealer",
        name: "ClipDealer",
        description: "i18n.collectors.clipdealer.description",
        version: "0",
        website: "https://de.clipdealer.com/index.php?ACTION=profile&page=invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/13373.jpg",
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
        entryUrl: "https://de.clipdealer.com/index.php?ACTION=profile&page=invoices",
    }

    constructor() {
        super(ClipdealerCollector.CONFIG);
    }
}
