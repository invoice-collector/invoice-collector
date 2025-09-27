
import { SketchCollector } from '../../sketchCollector';

export class ViapresseCollector extends SketchCollector {

    static CONFIG = {
        id: "viapresse",
        name: "Viapresse",
        description: "i18n.collectors.viapresse.description",
        version: "0",
        website: "https://www.viapresse.com/customer/account/login/referer/aHR0cHM6Ly93d3cudmlhcHJlc3NlLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw,,/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/123801.jpg",
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
        entryUrl: "https://www.viapresse.com/customer/account/login/referer/aHR0cHM6Ly93d3cudmlhcHJlc3NlLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw,,/",
    }

    constructor() {
        super(ViapresseCollector.CONFIG);
    }
}
