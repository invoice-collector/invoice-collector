
import { SketchCollector } from '../../sketchCollector';

export class BunnyCollector extends SketchCollector {

    static CONFIG = {
        id: "bunny",
        name: "Bunny",
        description: "i18n.collectors.bunny.description",
        version: "0",
        website: "https://panel.bunny.net/user/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1201994.jpg",
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
        entryUrl: "https://panel.bunny.net/user/login",
    }

    constructor() {
        super(BunnyCollector.CONFIG);
    }
}
