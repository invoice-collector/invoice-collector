
import { SketchCollector } from '../../sketchCollector';

export class WbsWorldsoftBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "wbs_worldsoft_business",
        name: "WBS Worldsoft Business",
        description: "i18n.collectors.wbs_worldsoft_business.description",
        version: "0",
        website: "https://www.worldsoft-wbs.com/billing/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/59998.jpg",
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
        entryUrl: "https://www.worldsoft-wbs.com/billing/invoices",
    }

    constructor() {
        super(WbsWorldsoftBusinessCollector.CONFIG);
    }
}
