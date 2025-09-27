
import { SketchCollector } from '../../sketchCollector';

export class LeadtableCollector extends SketchCollector {

    static CONFIG = {
        id: "leadtable",
        name: "LeadTable",
        description: "i18n.collectors.leadtable.description",
        version: "0",
        website: "https://portal.lead-table.com/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2166346.jpg",
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
        entryUrl: "https://portal.lead-table.com/signin",
    }

    constructor() {
        super(LeadtableCollector.CONFIG);
    }
}
