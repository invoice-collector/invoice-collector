
import { SketchCollector } from '../../sketchCollector';

export class RepsolCollector extends SketchCollector {

    static CONFIG = {
        id: "repsol",
        name: "REPSOL",
        description: "i18n.collectors.repsol.description",
        version: "0",
        website: "https://login.repsol.com/es/Landing/AuthnPage?returnUrl=https://www.repsol.com/es/index.cshtml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/111705.jpg",
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
        entryUrl: "https://login.repsol.com/es/Landing/AuthnPage?returnUrl=https://www.repsol.com/es/index.cshtml",
    }

    constructor() {
        super(RepsolCollector.CONFIG);
    }
}
