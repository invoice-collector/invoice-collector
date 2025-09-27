
import { SketchCollector } from '../../sketchCollector';

export class WasteIndustriesCollector extends SketchCollector {

    static CONFIG = {
        id: "waste_industries",
        name: "Waste Industries",
        description: "i18n.collectors.waste_industries.description",
        version: "0",
        website: "https://wasteindustries.com/myaccount/login?ReturnUrl=%2fmyaccount%2fhome",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/88491.jpg",
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
        entryUrl: "https://wasteindustries.com/myaccount/login?ReturnUrl=%2fmyaccount%2fhome",
    }

    constructor() {
        super(WasteIndustriesCollector.CONFIG);
    }
}
