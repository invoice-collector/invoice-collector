
import { SketchCollector } from '../../sketchCollector';

export class WindsurfAiCollector extends SketchCollector {

    static CONFIG = {
        id: "windsurf_ai",
        name: "Windsurf AI",
        description: "i18n.collectors.windsurf_ai.description",
        version: "0",
        website: "https://windsurf.com/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4585959.jpg",
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
        entryUrl: "https://windsurf.com/account/login",
    }

    constructor() {
        super(WindsurfAiCollector.CONFIG);
    }
}
