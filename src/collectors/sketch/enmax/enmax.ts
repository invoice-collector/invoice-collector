
import { SketchCollector } from '../../sketchCollector';

export class EnmaxCollector extends SketchCollector {

    static CONFIG = {
        id: "enmax",
        name: "ENMAX",
        description: "i18n.collectors.enmax.description",
        version: "0",
        website: "https://www.enmax.com/sign-in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/63497.jpg",
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
        entryUrl: "https://www.enmax.com/sign-in",
    }

    constructor() {
        super(EnmaxCollector.CONFIG);
    }
}
