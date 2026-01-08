
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AdnymicsGmbhParcelDealzCollector extends SketchCollector {

    static CONFIG = {
        id: "adnymics_gmbh_parcel_dealz",
        name: "ADNYMICS GMBH/Parcel Dealz",
        description: "i18n.collectors.adnymics_gmbh_parcel_dealz.description",
        version: "0",
        website: "https://app.parceldealz.com/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2038751.jpg",
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
        loginUrl: "https://app.parceldealz.com/invoice",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AdnymicsGmbhParcelDealzCollector.CONFIG);
    }
}
