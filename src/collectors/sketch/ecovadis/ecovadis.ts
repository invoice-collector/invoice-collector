
import { SketchCollector } from '../../sketchCollector';

export class EcovadisCollector extends SketchCollector {

    static CONFIG = {
        id: "ecovadis",
        name: "Ecovadis",
        description: "i18n.collectors.ecovadis.description",
        version: "0",
        website: "https://www.ecovadis-survey.com/app/#/subscription-billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/192205.jpg",
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
        entryUrl: "https://www.ecovadis-survey.com/app/#/subscription-billing",
    }

    constructor() {
        super(EcovadisCollector.CONFIG);
    }
}
