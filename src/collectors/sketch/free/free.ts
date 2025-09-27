
import { SketchCollector } from '../../sketchCollector';

export class FreeCollector extends SketchCollector {

    static CONFIG = {
        id: "free",
        name: "Free",
        description: "i18n.collectors.free.description",
        version: "0",
        website: "https://subscribe.free.fr/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/135352.jpg",
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
        entryUrl: "https://subscribe.free.fr/login/",
    }

    constructor() {
        super(FreeCollector.CONFIG);
    }
}
