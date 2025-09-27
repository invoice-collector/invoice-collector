
import { SketchCollector } from '../../sketchCollector';

export class XAiCollector extends SketchCollector {

    static CONFIG = {
        id: "x_ai",
        name: "x.ai",
        description: "i18n.collectors.x_ai.description",
        version: "0",
        website: "https://accounts.x.ai/sign-in?redirect=grok-com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/75327.jpg",
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
        entryUrl: "https://accounts.x.ai/sign-in?redirect=grok-com",
    }

    constructor() {
        super(XAiCollector.CONFIG);
    }
}
