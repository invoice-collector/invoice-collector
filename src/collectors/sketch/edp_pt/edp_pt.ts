
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EdpPtCollector extends SketchCollector {

    static CONFIG = {
        id: "edp_pt",
        name: "EDP.pt",
        description: "i18n.collectors.edp_pt.description",
        version: "0",
        website: "http://www.edp.pt",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9084.jpg",
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
        loginUrl: "http://www.edp.pt",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EdpPtCollector.CONFIG);
    }
}
