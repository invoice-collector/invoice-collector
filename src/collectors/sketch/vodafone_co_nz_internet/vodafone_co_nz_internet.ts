
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VodafoneCoNzInternetCollector extends SketchCollector {

    static CONFIG = {
        id: "vodafone_co_nz_internet",
        name: "Vodafone.co.nz - Internet",
        description: "i18n.collectors.vodafone_co_nz_internet.description",
        version: "0",
        website: "https://www.vodafone.co.nz/#sign-in#sign-in-internet",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8710.jpg",
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
        loginUrl: "https://www.vodafone.co.nz/#sign-in#sign-in-internet",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(VodafoneCoNzInternetCollector.CONFIG);
    }
}
