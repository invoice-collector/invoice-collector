
import { SketchCollector } from '../../sketchCollector';

export class CrazylisterCollector extends SketchCollector {

    static CONFIG = {
        id: "crazylister",
        name: "CrazyLister",
        description: "i18n.collectors.crazylister.description",
        version: "0",
        website: "https://crazylister.com/application/user/account/billing-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/773774.jpg",
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
        entryUrl: "https://crazylister.com/application/user/account/billing-history",
    }

    constructor() {
        super(CrazylisterCollector.CONFIG);
    }
}
