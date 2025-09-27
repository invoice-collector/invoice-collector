
import { SketchCollector } from '../../sketchCollector';

export class SelfservicerepairCollector extends SketchCollector {

    static CONFIG = {
        id: "selfservicerepair",
        name: "selfservicerepair",
        description: "i18n.collectors.selfservicerepair.description",
        version: "0",
        website: "https://selfservicerepair.eu/de-DE/account/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1802664.jpg",
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
        entryUrl: "https://selfservicerepair.eu/de-DE/account/orders",
    }

    constructor() {
        super(SelfservicerepairCollector.CONFIG);
    }
}
