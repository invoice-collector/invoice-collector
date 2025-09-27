
import { SketchCollector } from '../../sketchCollector';

export class UserwayCollector extends SketchCollector {

    static CONFIG = {
        id: "userway",
        name: "UserWay",
        description: "i18n.collectors.userway.description",
        version: "0",
        website: "https://manage.userway.org/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3006288.jpg",
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
        entryUrl: "https://manage.userway.org/login",
    }

    constructor() {
        super(UserwayCollector.CONFIG);
    }
}
