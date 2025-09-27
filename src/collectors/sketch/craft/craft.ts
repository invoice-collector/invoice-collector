
import { SketchCollector } from '../../sketchCollector';

export class CraftCollector extends SketchCollector {

    static CONFIG = {
        id: "craft",
        name: "craft",
        description: "i18n.collectors.craft.description",
        version: "0",
        website: "https://app.craft.io/auth/sign-in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/246203.jpg",
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
        entryUrl: "https://app.craft.io/auth/sign-in",
    }

    constructor() {
        super(CraftCollector.CONFIG);
    }
}
