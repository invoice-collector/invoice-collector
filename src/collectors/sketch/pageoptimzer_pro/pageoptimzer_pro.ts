
import { SketchCollector } from '../../sketchCollector';

export class PageoptimzerProCollector extends SketchCollector {

    static CONFIG = {
        id: "pageoptimzer_pro",
        name: "PageOptimzer Pro",
        description: "i18n.collectors.pageoptimzer_pro.description",
        version: "0",
        website: "https://app.pageoptimizer.pro/#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4210159.jpg",
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
        entryUrl: "https://app.pageoptimizer.pro/#/login",
    }

    constructor() {
        super(PageoptimzerProCollector.CONFIG);
    }
}
