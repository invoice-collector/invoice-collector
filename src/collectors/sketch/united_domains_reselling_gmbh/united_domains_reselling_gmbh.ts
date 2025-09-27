
import { SketchCollector } from '../../sketchCollector';

export class UnitedDomainsResellingGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "united_domains_reselling_gmbh",
        name: "united-domains Reselling GmbH",
        description: "i18n.collectors.united_domains_reselling_gmbh.description",
        version: "0",
        website: "https://domainreselling.de/index.php?p=finance",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/110065.jpg",
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
        entryUrl: "https://domainreselling.de/index.php?p=finance",
    }

    constructor() {
        super(UnitedDomainsResellingGmbhCollector.CONFIG);
    }
}
