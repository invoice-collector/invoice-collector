
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SwissmademarketingCollector extends SketchCollector {

    static CONFIG = {
        id: "swissmademarketing",
        name: "SwissMadeMarketing",
        description: "i18n.collectors.swissmademarketing.description",
        version: "0",
        website: "https://www.swissmademarketing.com/apps/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/15578.jpg",
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
        loginUrl: "https://www.swissmademarketing.com/apps/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SwissmademarketingCollector.CONFIG);
    }
}
