
import { SketchCollector } from '../../sketchCollector';

export class LeadinfoCollector extends SketchCollector {

    static CONFIG = {
        id: "leadinfo",
        name: "LeadInfo",
        description: "i18n.collectors.leadinfo.description",
        version: "0",
        website: "https://portal.leadinfo.com/settings/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2310226.jpg",
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
        entryUrl: "https://portal.leadinfo.com/settings/invoices",
    }

    constructor() {
        super(LeadinfoCollector.CONFIG);
    }
}
