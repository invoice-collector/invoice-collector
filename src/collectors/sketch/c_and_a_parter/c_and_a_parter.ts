
import { SketchCollector } from '../../sketchCollector';

export class CAndAParterCollector extends SketchCollector {

    static CONFIG = {
        id: "c_and_a_parter",
        name: "C&A Parter",
        description: "i18n.collectors.c_and_a_parter.description",
        version: "0",
        website: "https://partner.c-a.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/773292.jpg",
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
        entryUrl: "https://partner.c-a.com/",
    }

    constructor() {
        super(CAndAParterCollector.CONFIG);
    }
}
