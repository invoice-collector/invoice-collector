
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AllInklCollector extends SketchCollector {

    static CONFIG = {
        id: "all_inkl_com",
        name: "ALL-INKL",
        description: "i18n.collectors.all_inkl_com.description",
        version: "0",
        website: "https://all-inkl.com/members/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3074.jpg",
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
        loginUrl: "https://all-inkl.com/members/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AllInklCollector.CONFIG);
    }
}
