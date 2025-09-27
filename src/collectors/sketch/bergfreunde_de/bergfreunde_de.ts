
import { SketchCollector } from '../../sketchCollector';

export class BergfreundeDeCollector extends SketchCollector {

    static CONFIG = {
        id: "bergfreunde_de",
        name: "BERGFREUNDE.DE",
        description: "i18n.collectors.bergfreunde_de.description",
        version: "0",
        website: "https://www.bergfreunde.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/62563.jpg",
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
        entryUrl: "https://www.bergfreunde.de",
    }

    constructor() {
        super(BergfreundeDeCollector.CONFIG);
    }
}
