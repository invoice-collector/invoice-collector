
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class O2CoUkBusinessAccountCollector extends SketchCollector {

    static CONFIG = {
        id: "o2_co_uk_business_account",
        name: "o2.co.uk - Business Account",
        description: "i18n.collectors.o2_co_uk_business_account.description",
        version: "0",
        website: "https://accounts.o2.co.uk/auth?sendTo=https%3A%2F%2Faccounts.o2.co.uk%2Fbusiness%3Fpage_theme%3Dbusiness&failureUrl=https%3A%2F%2Faccounts.o2.co.uk%2Fbusiness%3Fpage_theme%3Dbusiness&auth_requirement_id=5e1af90e-6ee6-43c1-8a3b-cd5d6b9e5264",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/21902.jpg",
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
        loginUrl: "https://accounts.o2.co.uk/auth?sendTo=https%3A%2F%2Faccounts.o2.co.uk%2Fbusiness%3Fpage_theme%3Dbusiness&failureUrl=https%3A%2F%2Faccounts.o2.co.uk%2Fbusiness%3Fpage_theme%3Dbusiness&auth_requirement_id=5e1af90e-6ee6-43c1-8a3b-cd5d6b9e5264",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(O2CoUkBusinessAccountCollector.CONFIG);
    }
}
