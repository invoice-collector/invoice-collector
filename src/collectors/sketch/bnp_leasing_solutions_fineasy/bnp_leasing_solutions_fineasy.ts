
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BnpLeasingSolutionsFineasyCollector extends SketchCollector {

    static CONFIG = {
        id: "bnp_leasing_solutions_fineasy",
        name: "BNP Leasing Solutions (Fineasy)",
        description: "i18n.collectors.bnp_leasing_solutions_fineasy.description",
        version: "0",
        website: "https://leasingsolutions.kundenportal.fineasy.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/534315.jpg",
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
        loginUrl: "https://leasingsolutions.kundenportal.fineasy.com/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BnpLeasingSolutionsFineasyCollector.CONFIG);
    }
}
