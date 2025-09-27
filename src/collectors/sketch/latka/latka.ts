
import { SketchCollector } from '../../sketchCollector';

export class LatkaCollector extends SketchCollector {

    static CONFIG = {
        id: "latka",
        name: "Latka",
        description: "i18n.collectors.latka.description",
        version: "0",
        website: "https://getlatka.com/auth/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1109638.jpg",
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
        entryUrl: "https://getlatka.com/auth/login",
    }

    constructor() {
        super(LatkaCollector.CONFIG);
    }
}
