
import { SketchCollector } from '../../sketchCollector';

export class GttEnvisionCollector extends SketchCollector {

    static CONFIG = {
        id: "gtt_envision",
        name: "GTT - Envision",
        description: "i18n.collectors.gtt_envision.description",
        version: "0",
        website: "https://envision.gtt.net/billing-invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4472530.jpg",
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
        entryUrl: "https://envision.gtt.net/billing-invoice",
    }

    constructor() {
        super(GttEnvisionCollector.CONFIG);
    }
}
