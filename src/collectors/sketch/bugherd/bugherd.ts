
import { SketchCollector } from '../../sketchCollector';

export class BugherdCollector extends SketchCollector {

    static CONFIG = {
        id: "bugherd",
        name: "Bugherd",
        description: "i18n.collectors.bugherd.description",
        version: "0",
        website: "https://www.bugherd.com/users/sign_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4993.jpg",
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
        entryUrl: "https://www.bugherd.com/users/sign_in",
    }

    constructor() {
        super(BugherdCollector.CONFIG);
    }
}
