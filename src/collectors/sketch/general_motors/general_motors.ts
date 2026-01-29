
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GeneralMotorsCollector extends SketchCollector {

    static CONFIG = {
        id: "general_motors",
        name: "General Motors",
        description: "i18n.collectors.general_motors.description",
        version: "0",
        website: "https://pwbplus-saml.autopartners.net/reports-tools/custom/active-Partsinvoices/creditnotes",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4458224.jpg",
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
        loginUrl: "https://pwbplus-saml.autopartners.net/reports-tools/custom/active-Partsinvoices/creditnotes",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(GeneralMotorsCollector.CONFIG);
    }
}
