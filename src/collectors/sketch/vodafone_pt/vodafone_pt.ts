
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VodafonePtCollector extends SketchCollector {

    static CONFIG = {
        id: "vodafone_pt",
        name: "Vodafone.pt",
        description: "i18n.collectors.vodafone_pt.description",
        version: "0",
        website: "https://www.vodafone.pt/main/particulares#",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8702.jpg",
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
        loginUrl: "https://www.vodafone.pt/main/particulares#",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VodafonePtCollector.CONFIG);
    }
}
