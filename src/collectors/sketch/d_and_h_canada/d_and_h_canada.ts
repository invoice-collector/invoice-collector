
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DAndHCanadaCollector extends SketchCollector {

    static CONFIG = {
        id: "d_and_h_canada",
        name: "D & H Canada",
        description: "i18n.collectors.d_and_h_canada.description",
        version: "0",
        website: "https://www.dandh.ca/v4/view?pageReq=myOrders&int_cid=LP33&utm_campaign=OpenOrder",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/241844.jpg",
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
        loginUrl: "https://www.dandh.ca/v4/view?pageReq=myOrders&int_cid=LP33&utm_campaign=OpenOrder",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DAndHCanadaCollector.CONFIG);
    }
}
