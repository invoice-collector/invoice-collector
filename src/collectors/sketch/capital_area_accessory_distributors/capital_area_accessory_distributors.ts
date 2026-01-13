
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CapitalAreaAccessoryDistributorsCollector extends SketchCollector {

    static CONFIG = {
        id: "capital_area_accessory_distributors",
        name: "Capital Area Accessory Distributors",
        description: "i18n.collectors.capital_area_accessory_distributors.description",
        version: "0",
        website: "https://customerportal.gmcaad.com/scs/my_account.ssp#/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4593572.jpg",
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
        loginUrl: "https://customerportal.gmcaad.com/scs/my_account.ssp#/invoices",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CapitalAreaAccessoryDistributorsCollector.CONFIG);
    }
}
