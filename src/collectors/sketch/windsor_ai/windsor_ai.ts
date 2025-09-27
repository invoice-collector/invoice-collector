
import { SketchCollector } from '../../sketchCollector';

export class WindsorAiCollector extends SketchCollector {

    static CONFIG = {
        id: "windsor_ai",
        name: "Windsor.ai",
        description: "i18n.collectors.windsor_ai.description",
        version: "0",
        website: "https://windsor.ai/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2513816.jpg",
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
        entryUrl: "https://windsor.ai/",
    }

    constructor() {
        super(WindsorAiCollector.CONFIG);
    }
}
