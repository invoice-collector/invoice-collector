
import { SketchCollector } from '../../sketchCollector';

export class BbklopeCollector extends SketchCollector {

    static CONFIG = {
        id: "bbklope",
        name: "BBKlope",
        description: "i18n.collectors.bbklope.description",
        version: "0",
        website: "http://bbklope.fr/index.php?",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/116292.jpg",
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
        entryUrl: "http://bbklope.fr/index.php?",
    }

    constructor() {
        super(BbklopeCollector.CONFIG);
    }
}
