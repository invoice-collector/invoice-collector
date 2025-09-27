
import { SketchCollector } from '../../sketchCollector';

export class WonderLegalCollector extends SketchCollector {

    static CONFIG = {
        id: "wonder_legal",
        name: "Wonder.Legal",
        description: "i18n.collectors.wonder_legal.description",
        version: "0",
        website: "https://www.wonder.legal/de/compte/factures.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4503765.jpg",
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
        entryUrl: "https://www.wonder.legal/de/compte/factures.php",
    }

    constructor() {
        super(WonderLegalCollector.CONFIG);
    }
}
