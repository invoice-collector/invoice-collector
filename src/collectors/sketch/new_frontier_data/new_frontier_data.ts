
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NewFrontierDataCollector extends SketchCollector {

    static CONFIG = {
        id: "new_frontier_data",
        name: "New Frontier Data",
        description: "i18n.collectors.new_frontier_data.description",
        version: "0",
        website: "https://equio.newfrontierdata.com/userprofile",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/156540.jpg",
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
        loginUrl: "https://equio.newfrontierdata.com/userprofile",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NewFrontierDataCollector.CONFIG);
    }
}
