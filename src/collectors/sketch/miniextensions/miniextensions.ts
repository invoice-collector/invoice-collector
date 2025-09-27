
import { SketchCollector } from '../../sketchCollector';

export class MiniextensionsCollector extends SketchCollector {

    static CONFIG = {
        id: "miniextensions",
        name: "miniExtensions",
        description: "i18n.collectors.miniextensions.description",
        version: "0",
        website: "https://web.miniextensions.com/login?",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1467944.jpg",
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
        entryUrl: "https://web.miniextensions.com/login?",
    }

    constructor() {
        super(MiniextensionsCollector.CONFIG);
    }
}
