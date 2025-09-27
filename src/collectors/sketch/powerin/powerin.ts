
import { SketchCollector } from '../../sketchCollector';

export class PowerinCollector extends SketchCollector {

    static CONFIG = {
        id: "powerin",
        name: "PowerIn",
        description: "i18n.collectors.powerin.description",
        version: "0",
        website: "https://app.powerin.io/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4417083.jpg",
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
        entryUrl: "https://app.powerin.io/login",
    }

    constructor() {
        super(PowerinCollector.CONFIG);
    }
}
