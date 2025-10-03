
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ScalableCapitalAffiliateProgrammCollector extends SketchCollector {

    static CONFIG = {
        id: "scalable_capital_affiliate_programm",
        name: "Scalable Capital - Affiliate Programm",
        description: "i18n.collectors.scalable_capital_affiliate_programm.description",
        version: "0",
        website: "https://partner.scalable-capital.de/auszahlungen.cgi",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1722884.jpg",
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
        entryUrl: "https://partner.scalable-capital.de/auszahlungen.cgi",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ScalableCapitalAffiliateProgrammCollector.CONFIG);
    }
}
