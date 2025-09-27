
import { SketchCollector } from '../../sketchCollector';

export class UserbackCollector extends SketchCollector {

    static CONFIG = {
        id: "userback",
        name: "Userback",
        description: "i18n.collectors.userback.description",
        version: "0",
        website: "https://app.userback.io/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/760738.jpg",
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
        entryUrl: "https://app.userback.io/account/billing",
    }

    constructor() {
        super(UserbackCollector.CONFIG);
    }
}
