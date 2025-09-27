
import { SketchCollector } from '../../sketchCollector';

export class TailorBrandsCollector extends SketchCollector {

    static CONFIG = {
        id: "tailor_brands",
        name: "Tailor Brands",
        description: "i18n.collectors.tailor_brands.description",
        version: "0",
        website: "https://studio.tailorbrands.com/settings/invoices?selectedOrgId=15884670",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2075545.jpg",
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
        entryUrl: "https://studio.tailorbrands.com/settings/invoices?selectedOrgId=15884670",
    }

    constructor() {
        super(TailorBrandsCollector.CONFIG);
    }
}
