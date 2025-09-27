
import { SketchCollector } from '../../sketchCollector';

export class PigsbackComCollector extends SketchCollector {

    static CONFIG = {
        id: "pigsback_com",
        name: "Pigsback.com",
        description: "i18n.collectors.pigsback_com.description",
        version: "0",
        website: "https://www.pigsback.com/en-ie/Account/Login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/68599.jpg",
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
        entryUrl: "https://www.pigsback.com/en-ie/Account/Login",
    }

    constructor() {
        super(PigsbackComCollector.CONFIG);
    }
}
