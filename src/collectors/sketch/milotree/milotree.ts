
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MilotreeCollector extends SketchCollector {

    static CONFIG = {
        id: "milotree",
        name: "Milotree",
        description: "i18n.collectors.milotree.description",
        version: "0",
        website: "https://milotree.com/widgets/8666/edit",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/396171.jpg",
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
        loginUrl: "https://milotree.com/widgets/8666/edit",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MilotreeCollector.CONFIG);
    }
}
