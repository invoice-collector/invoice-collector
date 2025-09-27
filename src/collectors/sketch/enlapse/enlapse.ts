
import { SketchCollector } from '../../sketchCollector';

export class EnlapseCollector extends SketchCollector {

    static CONFIG = {
        id: "enlapse",
        name: "Enlapse",
        description: "i18n.collectors.enlapse.description",
        version: "0",
        website: "https://odoo-ps-enlaps.odoo.com/my/invoices?filterby=invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4420689.jpg",
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
        entryUrl: "https://odoo-ps-enlaps.odoo.com/my/invoices?filterby=invoices",
    }

    constructor() {
        super(EnlapseCollector.CONFIG);
    }
}
