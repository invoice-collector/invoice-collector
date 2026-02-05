
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class IabcCollector extends SketchCollector {

    static CONFIG = {
        id: "iabc",
        name: "IABC",
        description: "i18n.collectors.iabc.description",
        version: "0",
        website: "https://members.iabc.com/my-account/my-profile/?tab=activememberships",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2761412.jpg",
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
        loginUrl: "https://members.iabc.com/my-account/my-profile/?tab=activememberships",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(IabcCollector.CONFIG);
    }
}
