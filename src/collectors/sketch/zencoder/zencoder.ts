
import { SketchCollector } from '../../sketchCollector';

export class ZencoderCollector extends SketchCollector {

    static CONFIG = {
        id: "zencoder",
        name: "Zencoder",
        description: "i18n.collectors.zencoder.description",
        version: "0",
        website: "https://app.zencoder.com/account/statements/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/60849.jpg",
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
        entryUrl: "https://app.zencoder.com/account/statements/",
    }

    constructor() {
        super(ZencoderCollector.CONFIG);
    }
}
