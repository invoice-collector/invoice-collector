
import { SketchCollector } from '../../sketchCollector';

export class AplanoDeCollector extends SketchCollector {

    static CONFIG = {
        id: "aplano_de",
        name: "Aplano.de",
        description: "i18n.collectors.aplano_de.description",
        version: "0",
        website: "https://web.aplano.de/app/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777327.jpg",
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
        entryUrl: "https://web.aplano.de/app/settings/billing",
    }

    constructor() {
        super(AplanoDeCollector.CONFIG);
    }
}
