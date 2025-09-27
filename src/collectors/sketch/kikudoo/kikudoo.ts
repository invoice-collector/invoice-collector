
import { SketchCollector } from '../../sketchCollector';

export class KikudooCollector extends SketchCollector {

    static CONFIG = {
        id: "kikudoo",
        name: "kikudoo",
        description: "i18n.collectors.kikudoo.description",
        version: "0",
        website: "https://kikudoo.com/users/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2011831.jpg",
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
        entryUrl: "https://kikudoo.com/users/login",
    }

    constructor() {
        super(KikudooCollector.CONFIG);
    }
}
