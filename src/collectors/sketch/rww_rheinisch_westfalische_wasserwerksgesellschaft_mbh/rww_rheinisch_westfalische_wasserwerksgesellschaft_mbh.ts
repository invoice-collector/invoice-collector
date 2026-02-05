
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RwwRheinischWestfalischeWasserwerksgesellschaftMbhCollector extends SketchCollector {

    static CONFIG = {
        id: "rww_rheinisch_westfalische_wasserwerksgesellschaft_mbh",
        name: "RWW Rheinisch-Westfalische Wasserwerksgesellschaft mbH",
        description: "i18n.collectors.rww_rheinisch_westfalische_wasserwerksgesellschaft_mbh.description",
        version: "0",
        website: "https://onlineservice.service-rz.de/?act=login&werknr=29#normal",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1534126.jpg",
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
        loginUrl: "https://onlineservice.service-rz.de/?act=login&werknr=29#normal",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(RwwRheinischWestfalischeWasserwerksgesellschaftMbhCollector.CONFIG);
    }
}
