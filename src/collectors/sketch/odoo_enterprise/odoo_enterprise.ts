
import { SketchCollector } from '../../sketchCollector';

export class OdooEnterpriseCollector extends SketchCollector {

    static CONFIG = {
        id: "odoo_enterprise",
        name: "Odoo Enterprise",
        description: "i18n.collectors.odoo_enterprise.description",
        version: "0",
        website: "https://accounts.odoo.com/de_DE/my/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/395996.jpg",
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
        entryUrl: "https://accounts.odoo.com/de_DE/my/invoices",
    }

    constructor() {
        super(OdooEnterpriseCollector.CONFIG);
    }
}
