
import { SketchCollector } from '../../sketchCollector';

export class MultiInvestSachwertGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "multi_invest_sachwert_gmbh",
        name: "Multi-Invest Sachwert GmbH",
        description: "i18n.collectors.multi_invest_sachwert_gmbh.description",
        version: "0",
        website: "https://portal.multi-invest-ffm.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/545039.jpg",
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
        entryUrl: "https://portal.multi-invest-ffm.com/",
    }

    constructor() {
        super(MultiInvestSachwertGmbhCollector.CONFIG);
    }
}
