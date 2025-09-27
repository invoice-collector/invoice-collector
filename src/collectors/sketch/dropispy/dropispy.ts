
import { SketchCollector } from '../../sketchCollector';

export class DropispyCollector extends SketchCollector {

    static CONFIG = {
        id: "dropispy",
        name: "dropispy",
        description: "i18n.collectors.dropispy.description",
        version: "0",
        website: "https://app.dropispy.com/user",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1539453.jpg",
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
        entryUrl: "https://app.dropispy.com/user",
    }

    constructor() {
        super(DropispyCollector.CONFIG);
    }
}
