
import { SketchCollector } from '../../sketchCollector';

export class SitesauceCollector extends SketchCollector {

    static CONFIG = {
        id: "sitesauce",
        name: "SITESAUCE",
        description: "i18n.collectors.sitesauce.description",
        version: "0",
        website: "https://app.sitesauce.app/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/746875.jpg",
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
        entryUrl: "https://app.sitesauce.app/login",
    }

    constructor() {
        super(SitesauceCollector.CONFIG);
    }
}
