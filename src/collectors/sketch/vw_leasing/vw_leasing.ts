
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VwLeasingCollector extends SketchCollector {

    static CONFIG = {
        id: "vw_leasing",
        name: "VW Leasing",
        description: "i18n.collectors.vw_leasing.description",
        version: "0",
        website: "https://fleetonline.vwfs.com/FleetOnline.Login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/709956.jpg",
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
        loginUrl: "https://fleetonline.vwfs.com/FleetOnline.Login/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VwLeasingCollector.CONFIG);
    }
}
