
import { SketchCollector } from '../../sketchCollector';

export class SupermavenAiCollector extends SketchCollector {

    static CONFIG = {
        id: "supermaven_ai",
        name: "Supermaven AI",
        description: "i18n.collectors.supermaven_ai.description",
        version: "0",
        website: "https://supermaven.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3105899.jpg",
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
        entryUrl: "https://supermaven.com/login",
    }

    constructor() {
        super(SupermavenAiCollector.CONFIG);
    }
}
