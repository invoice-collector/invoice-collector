
import { SketchCollector } from '../../sketchCollector';

export class DomainOffensiveCollector extends SketchCollector {

    static CONFIG = {
        id: "domain_offensive",
        name: "Domain Offensive",
        description: "i18n.collectors.domain_offensive.description",
        version: "0",
        website: "https://my.do.de/finance/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3692.jpg",
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
        entryUrl: "https://my.do.de/finance/invoices",
    }

    constructor() {
        super(DomainOffensiveCollector.CONFIG);
    }
}
