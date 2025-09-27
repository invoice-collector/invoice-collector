
import { SketchCollector } from '../../sketchCollector';

export class WappalyzerCollector extends SketchCollector {

    static CONFIG = {
        id: "wappalyzer",
        name: "Wappalyzer",
        description: "i18n.collectors.wappalyzer.description",
        version: "0",
        website: "https://www.wappalyzer.com/invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1493227.jpg",
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
        entryUrl: "https://www.wappalyzer.com/invoices/",
    }

    constructor() {
        super(WappalyzerCollector.CONFIG);
    }
}
