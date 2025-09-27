
import { SketchCollector } from '../../sketchCollector';

export class SymaMobileCollector extends SketchCollector {

    static CONFIG = {
        id: "syma_mobile",
        name: "SYMA MOBILE",
        description: "i18n.collectors.syma_mobile.description",
        version: "0",
        website: "https://mysyma.symamobile.com/my-syma.html?_gl=1*ctneys*_ga*OTc3MTE1ODQ5LjE2NzM1MTA2NjA.*_ga_K3EN73FKLK*MTY3MzUxMDY2MC4xLjAuMTY3MzUxMDY2MC42MC4wLjA.#payments-bills",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1674408.jpg",
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
        entryUrl: "https://mysyma.symamobile.com/my-syma.html?_gl=1*ctneys*_ga*OTc3MTE1ODQ5LjE2NzM1MTA2NjA.*_ga_K3EN73FKLK*MTY3MzUxMDY2MC4xLjAuMTY3MzUxMDY2MC42MC4wLjA.#payments-bills",
    }

    constructor() {
        super(SymaMobileCollector.CONFIG);
    }
}
