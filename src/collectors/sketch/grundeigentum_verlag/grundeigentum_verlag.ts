
import { SketchCollector } from '../../sketchCollector';

export class GrundeigentumVerlagCollector extends SketchCollector {

    static CONFIG = {
        id: "grundeigentum_verlag",
        name: "Grundeigentum-Verlag",
        description: "i18n.collectors.grundeigentum_verlag.description",
        version: "0",
        website: "https://premium.grundeigentum-verlag.de/zugang/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/26543.jpg",
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
        entryUrl: "https://premium.grundeigentum-verlag.de/zugang/login",
    }

    constructor() {
        super(GrundeigentumVerlagCollector.CONFIG);
    }
}
