
import { SketchCollector } from '../../sketchCollector';

export class SyByCegedimCollector extends SketchCollector {

    static CONFIG = {
        id: "sy_by_cegedim",
        name: "SY by Cegedim",
        description: "i18n.collectors.sy_by_cegedim.description",
        version: "0",
        website: "https://portal.sybycegedim.com/sy-foclient/#/re-invoices/list",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4375598.jpg",
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
        entryUrl: "https://portal.sybycegedim.com/sy-foclient/#/re-invoices/list",
    }

    constructor() {
        super(SyByCegedimCollector.CONFIG);
    }
}
