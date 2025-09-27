
import { SketchCollector } from '../../sketchCollector';

export class StripoEmailCollector extends SketchCollector {

    static CONFIG = {
        id: "stripo_email",
        name: "Stripo.email",
        description: "i18n.collectors.stripo_email.description",
        version: "0",
        website: "https://my.stripo.email/cabinet/#/billing/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/88448.jpg",
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
        entryUrl: "https://my.stripo.email/cabinet/#/billing/",
    }

    constructor() {
        super(StripoEmailCollector.CONFIG);
    }
}
