
import { SketchCollector } from '../../sketchCollector';

export class DeinDesignCollector extends SketchCollector {

    static CONFIG = {
        id: "dein_design",
        name: "Dein Design",
        description: "i18n.collectors.dein_design.description",
        version: "0",
        website: "https://www.deindesign.de/de/secure/customer/orderStats.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1880041.jpg",
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
        entryUrl: "https://www.deindesign.de/de/secure/customer/orderStats.html",
    }

    constructor() {
        super(DeinDesignCollector.CONFIG);
    }
}
