
import { SketchCollector } from '../../sketchCollector';

export class SacramentoMunicipalUtilityDistrictCollector extends SketchCollector {

    static CONFIG = {
        id: "sacramento_municipal_utility_district",
        name: "Sacramento Municipal Utility District",
        description: "i18n.collectors.sacramento_municipal_utility_district.description",
        version: "0",
        website: "https://myaccount.smud.org/signin/accountselection",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/70044.jpg",
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
        entryUrl: "https://myaccount.smud.org/signin/accountselection",
    }

    constructor() {
        super(SacramentoMunicipalUtilityDistrictCollector.CONFIG);
    }
}
