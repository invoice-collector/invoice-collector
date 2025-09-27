
import { SketchCollector } from '../../sketchCollector';

export class MoncoyoteComCollector extends SketchCollector {

    static CONFIG = {
        id: "moncoyote_com",
        name: "MonCoyote.com",
        description: "i18n.collectors.moncoyote_com.description",
        version: "0",
        website: "https://www.moncoyote.com/fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122328.jpg",
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
        entryUrl: "https://www.moncoyote.com/fr/",
    }

    constructor() {
        super(MoncoyoteComCollector.CONFIG);
    }
}
