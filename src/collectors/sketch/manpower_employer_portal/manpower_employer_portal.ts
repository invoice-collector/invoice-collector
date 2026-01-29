
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ManpowerEmployerPortalCollector extends SketchCollector {

    static CONFIG = {
        id: "manpower_employer_portal",
        name: "Manpower - Employer Portal",
        description: "i18n.collectors.manpower_employer_portal.description",
        version: "0",
        website: "https://www.manpower.us/en/Employers.htm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/107840.jpg",
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
        loginUrl: "https://www.manpower.us/en/Employers.htm",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ManpowerEmployerPortalCollector.CONFIG);
    }
}
