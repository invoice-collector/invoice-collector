
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CollierCountyUtilitiesCollector extends SketchCollector {

    static CONFIG = {
        id: "collier_county_utilities",
        name: "Collier County Utilities",
        description: "i18n.collectors.collier_county_utilities.description",
        version: "0",
        website: "https://www.invoicecloud.com/portal/(S(qbumyc0ayz3zy5kmqgu5e5jl))/2/CustomerGroupLedger.aspx?mode=open",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2846260.jpg",
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
        loginUrl: "https://www.invoicecloud.com/portal/(S(qbumyc0ayz3zy5kmqgu5e5jl))/2/CustomerGroupLedger.aspx?mode=open",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CollierCountyUtilitiesCollector.CONFIG);
    }
}
