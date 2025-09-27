
import { SketchCollector } from '../../sketchCollector';

export class _1passwordSeparateEuropeanSiteCollector extends SketchCollector {

    static CONFIG = {
        id: "1password_separate_european_site",
        name: "1Password (Separate European Site)",
        description: "i18n.collectors.1password_separate_european_site.description",
        version: "0",
        website: "https://my.1password.eu/billing/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/135337.jpg",
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
        entryUrl: "https://my.1password.eu/billing/invoices",
    }

    constructor() {
        super(_1passwordSeparateEuropeanSiteCollector.CONFIG);
    }
}
