
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FortisBcCollector extends SketchCollector {

    static CONFIG = {
        id: "fortis_bc",
        name: "Fortis BC",
        description: "i18n.collectors.fortis_bc.description",
        version: "0",
        website: "https://accounts.fortisbc.com/hcl-axon.com~iem~cssweb/pages/account/account_summary.xhtml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9306.jpg",
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
        loginUrl: "https://accounts.fortisbc.com/hcl-axon.com~iem~cssweb/pages/account/account_summary.xhtml",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FortisBcCollector.CONFIG);
    }
}
