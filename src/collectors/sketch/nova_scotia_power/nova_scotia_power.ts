
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NovaScotiaPowerCollector extends SketchCollector {

    static CONFIG = {
        id: "nova_scotia_power",
        name: "Nova Scotia Power",
        description: "i18n.collectors.nova_scotia_power.description",
        version: "0",
        website: "https://myaccount.nspower.ca/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9583.jpg",
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
        loginUrl: "https://myaccount.nspower.ca/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NovaScotiaPowerCollector.CONFIG);
    }
}
