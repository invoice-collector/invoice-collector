
import { SketchCollector } from '../../sketchCollector';

export class PlandayCollector extends SketchCollector {

    static CONFIG = {
        id: "planday",
        name: "Planday",
        description: "i18n.collectors.planday.description",
        version: "0",
        website: "https://id.planday.com/findCompanyUrl?lang=en",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/46774.jpg",
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
        entryUrl: "https://id.planday.com/findCompanyUrl?lang=en",
    }

    constructor() {
        super(PlandayCollector.CONFIG);
    }
}
