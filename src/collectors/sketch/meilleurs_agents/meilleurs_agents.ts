
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MeilleursAgentsCollector extends SketchCollector {

    static CONFIG = {
        id: "meilleurs_agents",
        name: "meilleurs agents",
        description: "i18n.collectors.meilleurs_agents.description",
        version: "0",
        website: "https://www.meilleursagents.com/_signin?show=signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/840195.jpg",
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
        loginUrl: "https://www.meilleursagents.com/_signin?show=signin",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MeilleursAgentsCollector.CONFIG);
    }
}
