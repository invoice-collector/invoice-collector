
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BeautyleverancierCollector extends SketchCollector {

    static CONFIG = {
        id: "beautyleverancier",
        name: "Beautyleverancier",
        description: "i18n.collectors.beautyleverancier.description",
        version: "0",
        website: "https://www.beautyleverancier.nl/customer/account/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32850.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://www.beautyleverancier.nl/customer/account/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BeautyleverancierCollector.CONFIG);
    }
}
