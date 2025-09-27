
import { SketchCollector } from '../../sketchCollector';

export class SendleCollector extends SketchCollector {

    static CONFIG = {
        id: "sendle",
        name: "Sendle",
        description: "i18n.collectors.sendle.description",
        version: "0",
        website: "https://www.sendle.com/users/sign_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/747751.jpg",
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
        entryUrl: "https://www.sendle.com/users/sign_in",
    }

    constructor() {
        super(SendleCollector.CONFIG);
    }
}
