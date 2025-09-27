
import { SketchCollector } from '../../sketchCollector';

export class OmstarsCollector extends SketchCollector {

    static CONFIG = {
        id: "omstars",
        name: "OMSTARS",
        description: "i18n.collectors.omstars.description",
        version: "0",
        website: "https://omstars.com/sign-in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/792818.jpg",
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
        entryUrl: "https://omstars.com/sign-in",
    }

    constructor() {
        super(OmstarsCollector.CONFIG);
    }
}
