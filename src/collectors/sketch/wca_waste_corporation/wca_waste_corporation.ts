
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WcaWasteCorporationCollector extends SketchCollector {

    static CONFIG = {
        id: "wca_waste_corporation",
        name: "WCA Waste Corporation",
        description: "i18n.collectors.wca_waste_corporation.description",
        version: "0",
        website: "https://secure8.i-doxs.net/WCA/SignIn.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/88363.jpg",
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
        loginUrl: "https://secure8.i-doxs.net/WCA/SignIn.aspx",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(WcaWasteCorporationCollector.CONFIG);
    }
}
