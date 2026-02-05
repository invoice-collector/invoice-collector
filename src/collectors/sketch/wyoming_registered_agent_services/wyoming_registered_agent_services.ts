
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WyomingRegisteredAgentServicesCollector extends SketchCollector {

    static CONFIG = {
        id: "wyoming_registered_agent_services",
        name: "Wyoming Registered Agent Services",
        description: "i18n.collectors.wyoming_registered_agent_services.description",
        version: "0",
        website: "https://www.wyomingagents.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/39708.jpg",
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
        loginUrl: "https://www.wyomingagents.com/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(WyomingRegisteredAgentServicesCollector.CONFIG);
    }
}
