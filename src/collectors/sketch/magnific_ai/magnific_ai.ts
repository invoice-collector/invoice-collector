
import { SketchCollector } from '../../sketchCollector';

export class MagnificAiCollector extends SketchCollector {

    static CONFIG = {
        id: "magnific_ai",
        name: "Magnific.ai",
        description: "i18n.collectors.magnific_ai.description",
        version: "0",
        website: "https://magnific.ai/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2859120.jpg",
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
        entryUrl: "https://magnific.ai/",
    }

    constructor() {
        super(MagnificAiCollector.CONFIG);
    }
}
