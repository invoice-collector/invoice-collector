
import { SketchCollector } from '../../sketchCollector';

export class PrositeDeCollector extends SketchCollector {

    static CONFIG = {
        id: "prosite_de",
        name: "prosite.de",
        description: "i18n.collectors.prosite_de.description",
        version: "0",
        website: "https://www.prosite.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11248.jpg",
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
        entryUrl: "https://www.prosite.de/login",
    }

    constructor() {
        super(PrositeDeCollector.CONFIG);
    }
}
