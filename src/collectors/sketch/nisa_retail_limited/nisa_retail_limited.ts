
import { SketchCollector } from '../../sketchCollector';

export class NisaRetailLimitedCollector extends SketchCollector {

    static CONFIG = {
        id: "nisa_retail_limited",
        name: "Nisa Retail Limited",
        description: "i18n.collectors.nisa_retail_limited.description",
        version: "0",
        website: "https://ntorder.com/default.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/227379.jpg",
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
        entryUrl: "https://ntorder.com/default.aspx",
    }

    constructor() {
        super(NisaRetailLimitedCollector.CONFIG);
    }
}
