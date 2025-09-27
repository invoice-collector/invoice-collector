
import { SketchCollector } from '../../sketchCollector';

export class CorkBuilderProviderCollector extends SketchCollector {

    static CONFIG = {
        id: "cork_builder_provider",
        name: "Cork Builder Provider",
        description: "i18n.collectors.cork_builder_provider.description",
        version: "0",
        website: "https://grafton.softco.com/CBP/Home/Detail/Monthly%20Transactions/Monthly%20Transactions/AR%20Invoices/5763827",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/401939.jpg",
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
        entryUrl: "https://grafton.softco.com/CBP/Home/Detail/Monthly%20Transactions/Monthly%20Transactions/AR%20Invoices/5763827",
    }

    constructor() {
        super(CorkBuilderProviderCollector.CONFIG);
    }
}
