
import { SketchCollector } from '../../sketchCollector';

export class MubiCollector extends SketchCollector {

    static CONFIG = {
        id: "mubi",
        name: "Mubi",
        description: "i18n.collectors.mubi.description",
        version: "0",
        website: "https://mubi.com/subscription",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/534359.jpg",
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
        entryUrl: "https://mubi.com/subscription",
    }

    constructor() {
        super(MubiCollector.CONFIG);
    }
}
