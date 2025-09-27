
import { SketchCollector } from '../../sketchCollector';

export class VolsingCollector extends SketchCollector {

    static CONFIG = {
        id: "volsing",
        name: "Volsing",
        description: "i18n.collectors.volsing.description",
        version: "0",
        website: "https://www.tier-urnen.de/de/user/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4479339.jpg",
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
        entryUrl: "https://www.tier-urnen.de/de/user/login",
    }

    constructor() {
        super(VolsingCollector.CONFIG);
    }
}
