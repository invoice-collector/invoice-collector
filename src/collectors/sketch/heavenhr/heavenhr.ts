
import { SketchCollector } from '../../sketchCollector';

export class HeavenhrCollector extends SketchCollector {

    static CONFIG = {
        id: "heavenhr",
        name: "HeavenHR",
        description: "i18n.collectors.heavenhr.description",
        version: "0",
        website: "https://www.heavenhr.com/payroll/overview/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/30025.jpg",
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
        entryUrl: "https://www.heavenhr.com/payroll/overview/",
    }

    constructor() {
        super(HeavenhrCollector.CONFIG);
    }
}
