
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HinterlandCampCollector extends SketchCollector {

    static CONFIG = {
        id: "hinterland_camp",
        name: "Hinterland.camp",
        description: "i18n.collectors.hinterland_camp.description",
        version: "0",
        website: "https://hinterland.camp/dashboard/payouts",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2842144.jpg",
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
        loginUrl: "https://hinterland.camp/dashboard/payouts",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HinterlandCampCollector.CONFIG);
    }
}
