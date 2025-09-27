
import { SketchCollector } from '../../sketchCollector';

export class CoxBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "cox_business",
        name: "COX Business",
        description: "i18n.collectors.cox_business.description",
        version: "0",
        website: "https://www.cox.com/business/home.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/211120.jpg",
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
        entryUrl: "https://www.cox.com/business/home.html",
    }

    constructor() {
        super(CoxBusinessCollector.CONFIG);
    }
}
