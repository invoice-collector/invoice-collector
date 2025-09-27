
import { SketchCollector } from '../../sketchCollector';

export class CopyleaksCollector extends SketchCollector {

    static CONFIG = {
        id: "copyleaks",
        name: "Copyleaks",
        description: "i18n.collectors.copyleaks.description",
        version: "0",
        website: "https://id.copyleaks.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3197466.jpg",
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
        entryUrl: "https://id.copyleaks.com/billing",
    }

    constructor() {
        super(CopyleaksCollector.CONFIG);
    }
}
