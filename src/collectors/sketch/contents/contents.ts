
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ContentsCollector extends SketchCollector {

    static CONFIG = {
        id: "contents",
        name: "Contents",
        description: "i18n.collectors.contents.description",
        version: "0",
        website: "https://dashboard.contents.com/en/myprofile?tool=mybalance",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1799132.jpg",
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
        loginUrl: "https://dashboard.contents.com/en/myprofile?tool=mybalance",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ContentsCollector.CONFIG);
    }
}
