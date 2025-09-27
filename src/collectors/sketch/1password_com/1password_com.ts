
import { SketchCollector } from '../../sketchCollector';

export class _1passwordComCollector extends SketchCollector {

    static CONFIG = {
        id: "1password_com",
        name: "1Password (.com)",
        description: "i18n.collectors.1password_com.description",
        version: "0",
        website: "https://my.1password.com/signin?l=en",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7293.jpg",
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
        entryUrl: "https://my.1password.com/signin?l=en",
    }

    constructor() {
        super(_1passwordComCollector.CONFIG);
    }
}
