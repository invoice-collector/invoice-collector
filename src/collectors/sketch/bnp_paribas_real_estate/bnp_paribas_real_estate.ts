
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BnpParibasRealEstateCollector extends SketchCollector {

    static CONFIG = {
        id: "bnp_paribas_real_estate",
        name: "BNP PARIBAS REAL ESTATE",
        description: "i18n.collectors.bnp_paribas_real_estate.description",
        version: "0",
        website: "https://extranetclients.repmfrance.bnpparibas.fr/fr/account/statement",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4196657.jpg",
        type: CollectorType.SKETCH,
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
        loginUrl: "https://extranetclients.repmfrance.bnpparibas.fr/fr/account/statement",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BnpParibasRealEstateCollector.CONFIG);
    }
}
