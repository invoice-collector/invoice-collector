
import { SketchCollector } from '../../sketchCollector';

export class UsersnapCollector extends SketchCollector {

    static CONFIG = {
        id: "usersnap",
        name: "Usersnap",
        description: "i18n.collectors.usersnap.description",
        version: "0",
        website: "https://usersnap.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8061.jpg",
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
        entryUrl: "https://usersnap.com",
    }

    constructor() {
        super(UsersnapCollector.CONFIG);
    }
}
