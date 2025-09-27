
import { SketchCollector } from '../../sketchCollector';

export class EcologiCollector extends SketchCollector {

    static CONFIG = {
        id: "ecologi",
        name: "Ecologi",
        description: "i18n.collectors.ecologi.description",
        version: "0",
        website: "https://ecologi.com/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/976593.jpg",
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
        entryUrl: "https://ecologi.com/account/billing",
    }

    constructor() {
        super(EcologiCollector.CONFIG);
    }
}
